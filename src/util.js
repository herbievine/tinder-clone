import { faRedo, faTimes, faBolt, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
        return array
    }
}

const findIcon = icon => {
    let iconToReturn;

    switch (icon) {
        case 'faRedo':
            iconToReturn = faRedo
            break
        case 'faTimes':
            iconToReturn = faTimes
            break
        case 'faBolt':
            iconToReturn = faBolt
            break
        case 'faHeart':
            iconToReturn = faHeart
            break
        case 'faStar':
            iconToReturn = faStar
            break
        default:
            iconToReturn = null
            break
    }

    return iconToReturn
}

export { shuffle, findIcon }
