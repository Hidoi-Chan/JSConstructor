import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'
import image from './assets/image.jpg'

export const model = [
    new TitleBlock ('Конструктор сайтов', {
        tag: 'h2',
        styles: {
            'background-color': '#898',
            color: '#fff',
            'text-align': 'center',
            padding: '5px 10px',
            margin: 0
        }
    }),
    new TextBlock ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {
        styles: {
            margin: 0
        }
    }),
    new ColumnsBlock ([
        '1 string',
        '2 string',
        '3 string',
        '4 string',
        '5 колонка'
    ], {
        styles: {
            'font-weight': 'bold',
            'text-align': 'center',
            margin: 0
        }
    }),
    new ImageBlock (image, {
        styles: {
            margin: 0
        },
        imageStyles: {
            width: '100%',
            heith: 'auto'
        },
        alt: 'Красивый лес'
    })
]