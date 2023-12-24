#assignment-2
##API use instruction

https://assignment-2-liart-five.vercel.app/

1.for user 
# https://assignment-2-liart-five.vercel.app/api/users/ 

this api help to user thy can create profile! with there 
requre data! if user were created successfuly it will show with response! Existing
user can't create same profile agin.
 data requre like:
* {
    "success": true,
    "message": "user were creted successfuly",
    "data": {
        "userId": 1234590,
        "username": "john_dolly",
        "password": "",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "age": 30,
        "email": "dolly.doe@example.com",
        "isActive": true,
        "hobbies": [
            "Reading",
            "Traveling",
            "Cooking"
        ],
        "address": {
            "street": "123 Main Street",
            "city": "Exampleville",
            "country": "Exampleland"
        },
        "isDelete": true,
        "orders": [],
}


#2.GET all user this Route for Admin
https://assignment-2-liart-five.vercel.app/api/users/

this route provide all user collection in dataBase.


#3.Get single user 
https://assignment-2-liart-five.vercel.app/api/users/:userId

this Route for get single user! this query work with by user ID!
it's work with dynamicly.



#4.Delete user 
https://assignment-2-liart-five.vercel.app/api/users/:userId

basicly this route work for Delete user with Delete Method.
it's take action with User ID.



#5.Update User with PUT
https://assignment-2-liart-five.vercel.app/api/users/:userId

this route for Update user with User Id. User can update there data.
it's help to user Update there data.


#6.Add orders with PUT method 
https://assignment-2-liart-five.vercel.app/api/users/:userId/orders

this route for add Orders. when user try to add order. this route help to user 
to add orders.it's store the data.


#7.Get users all data 
https://assignment-2-liart-five.vercel.app/api/users/:userId/orders

with this route user able to see there all order. with his ID.
it's helpful to track Orders.










