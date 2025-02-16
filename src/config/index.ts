import bookCover from 'assets/images/book-cover.jpeg'

export const RECIEVER = 'PHdW4pwWbFdoofVhSEfPSHgradmrvZdbE5'
export const POST_ID = 'd4ad618684ade7bbaa70ea6996313a8cec13596ed8e17bf98a008f004f0d338f'

export const CONFIG_BOOK = {
  title: 'Деньги-Власть-Деньги',
  author: 'Даниил Сачков',
  bookCover,
  descriptionHTML: `
          <p class="font-medium">
            В книге <span class="italic">"Деньги-Власть-Деньги"</span> рассматриваются
            ключевые аспекты мировой финансовой системы и её влияние на общество. Прочитав
            её, вы узнаете:
          </p>
          <ul class="list-inside list-disc space-y-2">
            <li>
              <span class="font-semibold">История мировой долларовой системы:</span>
               как доллар стал основной мировой валютой.
            </li>
            <li>
              <span class="font-semibold">Финансовые кризисы:</span>
               как защитить свои активы в период глобальных экономических изменений.
            </li>
            <li>
              <span class="font-semibold">Власть и финансы:</span>
               как банкиры используют технологии, науку и философию для получения власти.
            </li>
            <li>
              <span class="font-semibold">Роль Китая:</span>
               его влияние на мировые события и экономические изменения.
            </li>
            <li>
              <span class="font-semibold">Масштабные революции:</span>
               возможно ли это в современном мире?
            </li>
            <li>
              <span class="font-semibold">Духовные аспекты:</span>
               какие ценности могут лежать в основе нового мирового порядка.
            </li>
          </ul>
  `,
  video: {
    title: 'Видеообзор книги «История центробанков»',
    subtitle: 'Эта глава из книги Даниила Сачкова «Деньги Власть Деньги»',
    url: 'https://bastyon.com/embedVideo.php?embed=true&s=62e5fc9031e8352f7c47bacfd50fe905355e1cfc9108ced2b40d08e02a3a57ea&host=peertube600.pocketnet.app&id=f555baef-7f24-4444-8c9a-dea01151b511',
  },
  buttons: {
    downloadLink: '/books/Деньги Власть Деньги.pdf',
    downloadAudioLink: 'https://vlast.xyz/audio_book.mp4',
    cryptoDonateLink: 'https://www.vlast.xyz/cryptodonation',
    paypalDonateLink: 'https://paypal.me/pocketnet',
    supportPKOIN: {
      reciever: RECIEVER,
      payment: {
        address: 'PHdW4pwWbFdoofVhSEfPSHgradmrvZdbE5',
        items: [
          {
            image: 'https://vlast.xyz/_astro/book-cover.cc407386_2oMosu.webp',
            name: 'Donation',
            value: 30,
          },
        ],
        store: {
          name: 'Daniel Satchkov',
          site: 'vlast.xyz',
        },
      },
    },
    postId: POST_ID,
  },
}
