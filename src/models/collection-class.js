'use strict';

class Collections{
    constructor(model){
        this.model = model;
    }

    // Build A CRUD Functions

    // Create a new record
    async create(obj){
        try{
            let newRecord = await this.model.create(obj);
            return newRecord;
        }catch(e){
            console.log(`Error when create a new record ${e}`);
        }
    }

    // Read from table
    async read(id){
        try{
            if(id){
                let record = await this.model.findOne({where:{id:id}});
                return record;
            }
            else{
                let records = await this.model.findAll();
                return records;
            }
        }catch(e){
            console.log(`Error when read a record ${e}`);
        }
    }

    // Update record from table
    async update(id, obj){
        try{
            let recordId = await this.model.findOne({where:{id:id}});
            let recordUpdated = await recordId.update(obj);
            return recordUpdated;
        }catch(e){
            console.log(`Error when update a record ${e}`);
        }
    }

    // Delete record
    async delete(id){
        try{
            if(!id){
                throw new Error('no id provided for model ', this.model)
            }
            else{
                let recordDeleted = await this.model.destroy({where:{id}});
                return {"Record is deleted": "Done!"};
            }
        }catch(e){
            console.log(`Error when delete a record ${e}`);
        }
    }

}

module.exports = Collections;