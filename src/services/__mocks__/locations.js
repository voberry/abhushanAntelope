import Kathmandu from '../../assets/images/kathmandu.jpeg'
import Pokhara from '../../assets/images/pokhara.jpg'
import Chitwan from '../../assets/images/chitwan.jpg'

export default {
    locations: {
        code: 0,
        message: 'SUCCESS',
        data: [
            {
                id: 1,
                code: 'KTH',
                title: 'Kathmandu',
                description: 'Kathmandu is the capital and largest city of Nepal, with a population of around one million.' +
                    ' Kathmandu is also the largest metropolis in the hilly region.' +
                    ' Nepali and Newari are the most spoken languages in the city.',
                image: Kathmandu,
                latitude: '27.700769',
                longitude: '85.300140',
                day: 5,
                icon: 'temple',
                wildLife: 2,
                nightLife : 5,
                culture: 5,
                mountains: 2,
            },
            {
                id: 3,
                code: 'CHT',
                title: 'Chitwan',
                description: "Chitwan District (Nepali: चितवन जिल्ला) is one of 77 districts of Nepal," +
                    " and is located in the southwestern part of Province No. 3 with Bharatpur, the fourth largest city" +
                    " of Nepal, as its district headquarters. It covers an area of 2,238.39 km2 (864.25 sq mi)",
                image: Chitwan,
                latitude: '27.68333',
                longitude: '84.43333',
                day: 2,
                icon: 'animal',
                wildLife: 5,
                nightLife : 1,
                culture: 2,
                mountains: 1,
            },
            {
                id: 2,
                code: 'PKR',
                title: 'Pokhara',
                description: "Pokhara is the city of lakes. There are several lakes in Pokhara and the prominent ones are " +
                    "Fewa Lake, Rupa Lake and Begnas Lake. Among these lakes, Fewa Lake is by far the most beautiful lake.",
                image: Pokhara,
                latitude: '28.26689',
                longitude: '83.96851',
                day: 3,
                icon: 'party',
                wildLife: 3,
                nightLife : 5,
                culture: 3,
                mountains: 4,
            }
        ]
    }
}