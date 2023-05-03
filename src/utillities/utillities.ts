import CocaCola from '../assets/images/mainPage/coca-cola.svg'
import Pepsi from '../assets/images/mainPage/pepsi.svg'
import Wildberries from '../assets/images/mainPage/wildberries.svg'
import Shoro from '../assets/images/mainPage/shoro.svg'
import Kulikov from '../assets/images/mainPage/kulikov.svg'

interface IMenuItem {
  name: string;
}

export const menuList: IMenuItem[] = [
  {
    name: 'Кафе и рестораны',
  },
  {
    name: 'Развлечения',
  },
  {
    name: 'Личные вещи'
  },
  {
    name: 'Красота и уход',
  },
  {
    name: 'Транспорт',
  },
  {
    name: 'Недвижимость',
  },
  {
    name: 'Медицина',
  },
  {
    name: 'Работа',
  },
  {
    name: 'Услуги',
  },
]

interface ICompanyItem {
  photo: string;
  stocks: number;
  discountPercentage: number;
}

export const companiesList: ICompanyItem[] = [
  {
    photo: CocaCola,
    stocks: 14,
    discountPercentage: 50,
  },
  {
    photo: Pepsi,
    stocks: 14,
    discountPercentage: 50,
  },
  {
    photo: Wildberries,
    stocks: 14,
    discountPercentage: 50,
  },
  {
    photo: Shoro,
    stocks: 14,
    discountPercentage: 50,
  },
  {
    photo: Kulikov,
    stocks: 14,
    discountPercentage: 50,
  },
]