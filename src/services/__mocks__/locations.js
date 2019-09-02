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
                    ' Nepali and Newari are the most spoken languages in the city.' +
                    '' +
                    'Kathmandu, also known as City of Temples, stands at an elevation of approximately 1,400 metres (4,600 feet) above sea level in the bowl-shaped Kathmandu Valley in central Nepal.' +
                    ' The valley is historically termed as "Nepal Mandala" and has been the home of Newa culture, a cosmopolitan urban civilization in the Himalayas foothills.' +
                    ' The city was the royal capital of the Kingdom of Nepal and hosts palaces, mansions and gardens of the Nepalese aristocracy.' +
                    ' It has been home to the headquarters of the South Asian Association for Regional Cooperation (SAARC) since 1985.' +
                    ' Today, it is the seat of government of the Nepalese republic established in 2008; and is part of the Province No. 3 in Nepalese administrative geography. ',
                image: Kathmandu,
                latitude: '27.700769',
                longitude: '85.300140',
                day: 5,
                icon: 'place-of-worship'
            },
            {
                id: 2,
                code: 'PKR',
                title: 'Pokhara',
                description: "Pokhara is the city of lakes. There are several lakes in Pokhara and the prominent ones are Fewa Lake, Rupa Lake and Begnas Lake. Among these lakes, Fewa Lake is by far the most beautiful lake. Nestled on a little island on Fewa Lake is the Barahi Temple. For a small charge, you can go on a boat ride on this lake. The sunlight reflects on the lake and glitters and the mountains smile upon us in the reflection.\n" +
                    "\n" +
                    "You can walk on the Lakeside enjoying the sight which is an incredible experience. I regret the fact that when I was a resident here in Pokhara I overlooked its charms. Lakeside is even prettier in the late evenings, under the soft glow of lamp posts hung upon the creatively built restaurants and shops. You can dine here while enjoying the live entertainments. Other attractions of Pokhara are Davis’ Fall which is a beautiful waterfall and Buddha Stupa. Then there is Sarangkot which is a towering hill that offers a magnificent view of Pokhara from its hill top.",
                image: Pokhara,
                latitude: '28.26689',
                longitude: '83.96851',
                day: 3,
                icon: 'glass-cheers'
            },
            {
                id: 3,
                code: 'CHT',
                title: 'Chitwan',
                description: "Chitwan District (Nepali: चितवन जिल्ला) is one of 77 districts of Nepal, and is located in the southwestern part of Province No. 3 with Bharatpur, the fourth largest city of Nepal, as its district headquarters. It covers an area of 2,238.39 km2 (864.25 sq mi), and in 2011 had a population of 579,984 (279,087 male and 300,897 female) people. Bharatpur is a commercial and service centre of central south Nepal and major destination for higher education, health care and transportation in the region. ",
                image: Chitwan,
                latitude: '27.68333',
                longitude: '84.43333',
                day: 2,
                icon: 'hippo'
            }
        ]
    }
}