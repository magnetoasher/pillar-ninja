export interface ISocial {
  icon: string;
  title: string;
  link?: string;
  sublinks?: string[];
}

export const socials: ISocial[] = [
  {
    icon: 'fa-brands fa-youtube',
    title: 'Ninja Gaming',
    link: 'http://youtube.com/ninja?sub_confirmation=1',
  },
  {
    icon: 'fa-brands fa-youtube',
    title: 'Ninja Sports',
    link: 'https://www.youtube.com/channel/UCmyweyoqldy5yPGeHigEyzA',
  },
  {
    icon: 'fa-brands fa-instagram',
    title: 'Instagram',
    link: 'https://www.instagram.com/ninja/',
  },
  {
    icon: 'fa-brands fa-facebook-f',
    title: 'Facebook',
    link: 'https://www.facebook.com/NinjaTB/',
  },
  {
    icon: 'fa-brands fa-twitter',
    title: 'Twitter',
    link: 'https://twitter.com/Ninja',
  },
  {
    icon: 'fa-brands fa-twitch',
    title: 'Twitch',
    sublinks: [
      'https://player.twitch.tv?allowfullscreen=true&autoplay=false&channel=ninja&height=350&layout=video-with-chat&parent=pillar.io&referrer=https%3A%2F%2Fpillar.io%2Fninja&theme=dark&width=100%25',
      'https://www.twitch.tv/embed/ninja/chat?parent=pillar.io&darkpopout',
    ],
  },
  {
    icon: 'fa-brands fa-tiktok',
    title: 'TikTok',
    link: 'https://www.tiktok.com/@ninja',
  },
  {
    icon: 'fa-sharp fa-solid fa-cart-shopping',
    title: 'Merch!',
    link: 'https://teamninja.com/',
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Text Me!',
    link: 'https://my.community.com/ninja',
  },
];
