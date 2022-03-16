import React from 'react';
import CityItem from "./CityItem";

function CityList() {
    const cityList = [
        { id: 0, name: 'Los Angeles (US)', imgSrc : 'https://s3-alpha-sig.figma.com/img/b884/c5a7/639068644ec445680ea45f1e58054bb4?Expires=1648425600&Signature=bJtQv~g-a3ph2znFpfU~-HfxE0neC-BNpzmbtJOU~KrJKvSM~ONND8oVNJil0dooz3TaNypHUSFqb38hEy5CZNReCW3muUqldcWFOPzpABCAVSA5iDQXxWD9EE0FHm5cp46-BDcVWZI2kLoqMVu0z7yju4P8~uRQrMIY5Xu5C-K9bjNK5FNTReJzU-ClIx68gHaJeLZCkLmieNs2MpIHe~35QKzf6~Ll-p6GKOfOCvl9CB3sZjfGNW-4CZsNrDk7c5jkC6z55ogACtqMFHIJ-hGP5zqe8jNHyZl9hOwaxeBxcCFImhXGRW3MBYp~g2Jg1TJ2ehEnSmbtmLdGWEY4PQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 1, name: 'Los Vegas (US)', imgSrc : 'https://s3-alpha-sig.figma.com/img/cbc7/a991/290a38bb44ed3018de38f6352914d2d7?Expires=1648425600&Signature=DwMS4vNunBvszP5JDT27JRY9iHC0KyCdrck0bqOFX3YicVnpzNkSxJznWHWGzER~os7fE-tXcyHWQdtwnKtf8YZ2DPLvspcKTcozGTP8UUlW2RhaCjR5Y9r5~CCp~pQw46~B8QgKJtJcUv54WQLRB1caPCSwBYcStHkXME6F8vcHbyMqELRjHn5EZ-HQvdNaZBbCOdtxv7NMfdJBJVHzbe7K5WtaO36p24vtTZ0fbGQ-z6eacBMKnZ3EChsQDtXACKwjy7BG8TQaYGIeWXMkTxIbB-MNQ5KOGNZfrDhEPGS8l-j21ffz7Hoi1rRWalU4SD-pcbBJItslIF~EjZLv~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 2, name: 'Miami (US)', imgSrc : 'https://s3-alpha-sig.figma.com/img/8852/3d61/b8608182760a96e38cc5469085e14671?Expires=1648425600&Signature=ZOm-YK0IjP6ezpd5JkC6q9RopdWcP1-0dPvEJBGM3HnMV~ZM8AigAoaoQr48Ce-5vBTwN~u5yy9l4T9wQyL~VPGau3jK~4X9~-mcmc3mGfF7CmMrN5DUUAbZi5u2rfaE0aySechQiauRg1JUsfmuHPdBat-JMtXkWpfQOj31QdNMGGTsIWOTmSU5INpXAEwCFnO8Y39G-G2YECr1KoE02PK2RwcTXhQG-6Kd53N3qpLMzhysWapzqnST7Dbk-zLHWzE8Kgb87XnDY2e9NFyHCh4AQcQcjKeG3TJLWakkv6Iflj6exFN6uyv3hQxgDOdU5wPrxLfkiLvBxNgwjsGapw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 3, name: 'Orlando (US)', imgSrc : 'https://s3-alpha-sig.figma.com/img/f27a/4aa7/e808c7041a7332bb357225c8acf4a520?Expires=1648425600&Signature=HWX1178QxwqtTS3-Twyvt6aPBEK9OFkHD76sqTisQ1BVmARb8e~64rSsP74aqrA5AU9lWJHgmbqnwgdK4H5hZgmiU99577kqJ3w7S0v-8uJ1P9U0AZ7-ISlAqFK9Okm8A08ERT~EcIArnT~7KiD35ccgfr4klGCgOjNSAqjWm20OEvd-HqhdfVK76fo3yernpHjo2nKbnY5TT4igTS8Qqie0RIz43M1xfQi3y~YoNyJJN-FZkTdnPDT7ob~FkPWyVLCytRIvJdiQ9nAqDeANT~zmkzUJxNEeArOaYeYizcDoZClHAbZGnrakV07EgO0wuDyIJHKF8RzUJP3Hl7qj4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }
    ]
    return (
        <div className="city-list">
            <h3 className="city-list__header">
                Check the popular destinations
            </h3>
            <ul className="city-list__body">
                {cityList.length > 0 && cityList.map((city) => <CityItem city={city} key={city.id} />)}
            </ul>
        </div>
    );
}

export default CityList;