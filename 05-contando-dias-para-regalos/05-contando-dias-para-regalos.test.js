const daysToXmas = require('./05-contando-dias-para-regalos');

describe('when calling daysToXmas', () => {
    test.each`
    date                            | expectedDaysToXmass
    ${'Dec 1, 2021'}                | ${24} 
    ${'Dec 23, 2021 00:00:01'}      | ${2} 
    ${'Dec 24, 2021 00:00:01'}      | ${1} 
    ${'Dec 24, 2021 23:59:59'}      | ${1} 
    ${'December 20, 2021 03:24:00'} | ${5} 
    ${'Dec 25, 2021'}               | ${0} 
    ${'Dec 26, 2021'}               | ${-1}
    ${'Dec 31, 2021'}               | ${-6}  
    ${'Jan 1, 2022 00:00:01'}       | ${-7}  
    ${'Jan 1, 2022 23:59:59'}       | ${-7}  
    
    `('$expectedDaysToXmass days to xmas, when date is $date', ({ date, expectedDaysToXmass }) => {
        const days = daysToXmas(new Date(date));
        expect(days).toBe(expectedDaysToXmass);
    });
})
