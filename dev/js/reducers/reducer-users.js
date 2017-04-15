/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Bucky",
            last: "Roberts",
            email:"brob@gmail.com",
            password:"winter",
            lcoation:54986,
            total:8,
            badges:[],
        },
        {
          id: 2,
          first: "B",
          last: "a",
          email:"ba@gmail.com",
          password:"winter",
          lcoation:54986,
          total:8,
          badges:[],
        },
        {
          id: 3,
          first: "Bucky",
          last: "d",
          email:"bd@gmail.com",
          password:"winter",
          lcoation:54986,
          total:8,
          badges:[],
        }
    ]
}
