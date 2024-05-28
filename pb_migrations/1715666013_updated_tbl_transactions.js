/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjshkdomef7fr0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmrv4ixv",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wvujw04v0vhkhtd",
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
  collection.schema.removeField("wmrv4ixv")

  return dao.saveCollection(collection)
})
