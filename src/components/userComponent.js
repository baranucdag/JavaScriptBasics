import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logging.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component loaded")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)
let user1 = new User(1,"baran","ucdag","adana")
let user2 = new User(1,"ahmet","ucdag","adana")

userService.add(user1)
userService.add(user2)
console.log(userService.list())