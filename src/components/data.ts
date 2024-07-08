export interface Position {
    lat: number
    lng: number
}

export const Position = {
    toString: (that: Position) => {
        //                👇🏻️ Modifying this string can trigger an error.
        return that.lat + ', ' + that.lng
    }
}