export class BaseLogger{
    log(data){
        console.log(data + " default logger")
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log(data + " logged to elastic")
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log(data + " logged to Mongo")
    }
}