import data from '../assets/data.json'

// Here I add some fake reviews to my data, so that I can interact with them when they become part of state.
data.reviews = [
    {
        name: "Tom Generiek",
        id: 1,
        email: "tom.generiek@hotmail.com",
        body: "Prachtige website, heel mooi gemaakt! Als je deze opdracht nog niet heb gehaald, weet ik het ook niet meer!",
        timeStamp: new Date(2022, 0, 18, 21, 11),
        canEdit: false
    },
    {
        name: "Angela Fictief",
        id: 2,
        email: "angela.fictief@gmail.com",
        body: "Vijf sterren van mij voor deze prachtige pagina!",
        timeStamp: new Date(2023, 0, 19, 9, 31),
        canEdit: false
    }
]

const Reducer = (state = data, action) => {
    switch (action.type) {
        case "ADD_REVIEW":
            const createID = () => {
                const idArray = state.reviews.map((item) => { return item.id })
                const newArray = idArray.sort(function (a, b) {
                    return a - b
                })
                const highNumber = newArray.splice(-1)
                return parseInt(highNumber) + 1
            }
            action.payload.id = createID()
            action.payload.canEdit = true
            const newState = { ...state, reviews: [...state.reviews, action.payload] }
            return newState
        case "DELETE_REVIEW":
            const copiedArray = state.reviews.filter(item => action.payload !== item.id)
            const updatedState = {...state, reviews: copiedArray}
            return updatedState
        default:
            return state;
    }
}

export default Reducer