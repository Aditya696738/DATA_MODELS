
    USER {
        ObjectId _id
        String    name
        String    email
        String    password
        Date      createdAt
        Date      updatedAt
    }
    TODO {
        ObjectId _id
        String    title
        String    description
        Boolean   isCompleted
        Date      dueDate
        ObjectId  userId  
        Date      createdAt
        Date      updatedAt
    }
    SUB_TODO {
        ObjectId _id
        String    title
        Boolean   isCompleted
        ObjectId  todoId
        Date      createdAt
        Date      updatedAt
    }

   
    
