const puppeteer = require('puppeteer');

async function scrapeWinningNumbers() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.megamillions.com/Winning-Numbers/Previous-Drawings.aspx#page9');
    
    // Wait for the numbers to be loaded
    await page.waitForSelector('.ball.pastNum1');
    await page.waitForSelector('.ball.pastNum2');
    await page.waitForSelector('.ball.pastNum3');
    await page.waitForSelector('.ball.pastNum4');
    await page.waitForSelector('.ball.pastNum5');
    await page.waitForSelector('.pastNumMB');

    const winningNumbers = {};

    const extractNumbers = async (className) => {
        return await page.evaluate((className) => {
            const numbers = [];
            document.querySelectorAll(`.ball.${className}`).forEach(li => {
                numbers.push(li.textContent.trim());
            });
            return numbers;
        }, className);
    };

    winningNumbers.pastNum1 = await extractNumbers('pastNum1');
    winningNumbers.pastNum2 = await extractNumbers('pastNum2');
    winningNumbers.pastNum3 = await extractNumbers('pastNum3');
    winningNumbers.pastNum4 = await extractNumbers('pastNum4');
    winningNumbers.pastNum5 = await extractNumbers('pastNum5');
    winningNumbers.pastNumMB = await extractNumbers('pastNumMB');

    // Function to count occurrences of each number
    const countOccurrences = (numbers) => {
        const counts = {};
        numbers.forEach(number => {
            counts[number] = (counts[number] || 0) + 1;
        });
        return counts;
    };

    // Function to find most common and least common numbers
    const findMostAndLeastCommon = (numbers) => {
        const counts = countOccurrences(numbers);
        const sortedNumbers = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
        return {
            mostCommon: sortedNumbers[0],
            leastCommon: sortedNumbers[sortedNumbers.length - 1]
        };
    };

    // Find most common and least common numbers for each ball
    const mostAndLeastCommonNumbers = {
        pastNum1: findMostAndLeastCommon(winningNumbers.pastNum1),
        pastNum2: findMostAndLeastCommon(winningNumbers.pastNum2),
        pastNum3: findMostAndLeastCommon(winningNumbers.pastNum3),
        pastNum4: findMostAndLeastCommon(winningNumbers.pastNum4),
        pastNum5: findMostAndLeastCommon(winningNumbers.pastNum5),
        pastNumMB: findMostAndLeastCommon(winningNumbers.pastNumMB)
    };

    console.log('Most and least common numbers for each ball:');
    console.log('pastNum1: Most Common:', mostAndLeastCommonNumbers.pastNum1.mostCommon, 'Least Common:', mostAndLeastCommonNumbers.pastNum1.leastCommon);
    console.log('pastNum2: Most Common:', mostAndLeastCommonNumbers.pastNum2.mostCommon, 'Least Common:', mostAndLeastCommonNumbers.pastNum2.leastCommon);
    console.log('pastNum3: Most Common:', mostAndLeastCommonNumbers.pastNum3.mostCommon, 'Least Common:', mostAndLeastCommonNumbers.pastNum3.leastCommon);
    console.log('pastNum4: Most Common:', mostAndLeastCommonNumbers.pastNum4.mostCommon, 'Least Common:', mostAndLeastCommonNumbers.pastNum4.leastCommon);
    console.log('pastNum5: Most Common:', mostAndLeastCommonNumbers.pastNum5.mostCommon, 'Least Common:', mostAndLeastCommonNumbers.pastNum5.leastCommon);
    console.log('pastNumMB: Most Common:', mostAndLeastCommonNumbers.pastNumMB.mostCommon, 'Least Common:', mostAndLeastCommonNumbers.pastNumMB.leastCommon);

    await browser.close();
}

scrapeWinningNumbers();
