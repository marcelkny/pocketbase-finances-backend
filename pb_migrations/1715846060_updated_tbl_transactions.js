/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjshkdomef7fr0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vqh2ayvf",
    "name": "deposit_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rfyvjpbxjqd2cfp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjshkdomef7fr0")

  // remove
  collection.schema.removeField("vqh2ayvf")

  return dao.saveCollection(collection)
})
