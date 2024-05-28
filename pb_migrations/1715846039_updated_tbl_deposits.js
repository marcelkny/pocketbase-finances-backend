/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rfyvjpbxjqd2cfp")

  // remove
  collection.schema.removeField("k3re4sjh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rfyvjpbxjqd2cfp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k3re4sjh",
    "name": "transaction_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8yjshkdomef7fr0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
