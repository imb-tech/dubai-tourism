import TourCard from 'components/shared/tour-card';
import React from 'react';

const tours: Tour[] = [
  {
    id: 1,
    image: '/tour-1.png',
    location: 'Maldiv, Island',
  },
  {
    id: 2,
    image:
      'https://s3-alpha-sig.figma.com/img/4611/cb3a/1a468c2a529202ede7a86f30f1db38e6?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YPZiL3ar2L23OLeaY2wll5XhBuT8Eg1Kl-yfaxYvTFmMc34c8y~PiIl2qCfjtWJDWcZU4rIqHRoJCjKPD8J3PMWOAy4FgBP1vQ8DaLMg4K7Ium4MjDKvBNrEmVyP3iENehFqm0Oj-n17XCHxHQOM9vKitxe9SVKgBRSN934HIEcYtZZlfaE5-aku-eE4oaFwOO-B5-WH3N~HJNho1IlolFRHJM4EPXRM7KhCEnsS5BXAQSXn6CrayZWk7te~1939JQTFS9OD-MDFRkqHT0hucmpmMsMHtm0N~oMc-hIL5WcZwml7kEpgLljBuCXeSfXVi124LolzUBAxz6l2qseIvw__',
    location: 'Maldiv, Island',
  },
  {
    id: 3,
    image:
      'https://s3-alpha-sig.figma.com/img/d3b3/932b/bcb7dab4cb1b826f313061b9714b5706?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MIygng7IGPm742CevqWUxlo3Yo4D4z2SSyO3pfA9d-mQVqDN828JNQta2S4IH0u-6FWpF0YhvG7OcvGKQEl5lKda~PgQaMWbgalYptwd5AvqeRUocVZPApvyvvI7rSwBsd2Pa-PmfU9JIyjp2rX8BwUek9UMugu0WrJrE8n0peddGEsqWAFXz7qkGNac4AppwlbsI8Lkc63OhQZ0q6ksGVU1X2-R3O2dtne5oEgo9KkcjDQ1JjiCH~4r34N9gsdbUJoaiUP1w8nRWOjJFYPuzYOfMBhmi9c2s1yxhBOeldYzTQ4wCfQcO~ElfvOPfl1AjRbnM1xJcoUBlhBippOThA__',
    location: 'Maldiv, Island',
  },
  {
    id: 4,
    image:
      'https://s3-alpha-sig.figma.com/img/c7c3/090c/72191084556dc542ed559a9ddc7bd2ca?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=soEhztmQ5PeBrD2QUuVwx1W3XlZV2yNQDfNVCYr0r-ptly-Qs5CXdzOgeXNVhHcSGCXIVwojDeZBLZOl1uDyUDjAkNnH2myBV20sE88JVmzaAx5WGVtXROxwP3SSPbmYuNuiCfmA0RHaz9m5ly00iS1vynFdmJrz1dkUseSJLteR~qXY4~APLEa0Sd9bDf7UTi-efLtPgZVu6xv3fTnAM8Cbe9fG9syXUfU44wUUqj65EQ~GaRKL1ZBHC2hSNeO-ZrCv6Mtj~HngfnFE6qQ5ftLAzpZFbKzXyLdGwWFhiDgW1VFauQsbJC4EvGMfhqfE7sHo1ax1yjBwdjCMsqvnQg__',
    location: 'Maldiv, Island',
  },
  {
    id: 5,
    image:
      'https://s3-alpha-sig.figma.com/img/6af2/08fe/dbfa79aac1eb98519f80f700a086cdb6?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jV~eovUG-hkYJPrRSiotaEvqIIsBgpjBTBvgKXTnij~bTGIgpXz~s2mimjUcJicM0Cjo6Z1-eyW9M3oVPn7B9rFaTTZaLMFBclB6NSAxbHt696eZk8F7bwCyBaXM1sXaph61ehZT3fUidU5Js5dNPcMycSbtSg8eYSy2wKo7S7OQ1c6-o767clUfhQke6EI0-iR4zRUqUXWIaw2tWn~kwX1yf28JCzYkXmWbzdubBQuox~5MgjUkgPAPWNGAPlwmxluQ7-7JZn5LSfWcBawinhKKF3O~UZEbbo~XoRShBn1H~9BWz4IepWGwN4YRU~gOp3DccrxIxVmgX3JzhzfQow__',
    location: 'Maldiv, Island',
  },
  {
    id: 6,
    image:
      'https://s3-alpha-sig.figma.com/img/31b0/8b9e/32cabdc8ebc89ec30f14e1a385e5f7ae?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VS2A5h3CiYcbG571bLdd8JqIGdtKRudxBANu0JKmjW1FO3-y0S8t0YRehm5OOLkBNs5r87RcGjVlC-QI8Heo5th5ej~Sk6MtPLhrw0T7bZv06mjE8TWaddWFjk1-4oaP1KOzHVOzs1ZWxb7lkc4nMaST9nDd9LE6~4HwK4rLDv23PbfZrWUJVxTR0SvbTMuyLZjeyesY893M2pvYfZwbqnkN8gWw2c6oM6-NQa-KTnvz8yeQ~bQAlm-iHBAyH1j9NsUb-GJ-jEjwv-ErDUU46rsfVEY8b9c6R9cqWaRA0rHpxymJo3C-hwGJZzeWN4eRZwQCHEW2LyPGBC0Vv9eCOg__',
    location: 'Maldiv, Island',
  },
];

export default function Tours() {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <h2 className="text-3xl font-semibold mb-3">Tour packages</h2>
      <div className="grid grid-cols-4 gap-5">
        {tours.map((s, i) => (
          <TourCard key={s.id} index={i} {...s} />
        ))}
      </div>
    </div>
  );
}
