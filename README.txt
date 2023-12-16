#assignment-2
##API use instruction

1.for user 
# http://localhost:5002/api/users/create-user 

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


#2. get all user this Route for Admin
http://localhost:5002/api/users/get-all-users

this route provide all user collection in dataBase.


#3.Get single user 
http://localhost:5002/api/users/6575d11e51a5498c92715f20

this Route for get single user! this query work with by user ID!
it's work with dynamicly 



#4.Delete user 
http://localhost:5002/api/users/6575d11e51a5498c92715f20

basicly this route work for Delete user with Delete Method.
it's take action with User ID.



#5.Update User with PUT
http://localhost:5002/api/users/657a9739c5bacaa7295bd336

this route for Update user with User Id. User can update there data.
it's help to user Update there data.


#6.Add orders with PUT method 
http://localhost:5002/api/users/657a9739c5bacaa7295bd336/orders

this route for add Orders. when user try to add order. this route help to user 
to add orders.







