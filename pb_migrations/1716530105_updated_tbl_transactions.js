/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjshkdomef7fr0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0flachvn",
    "name": "is_blueprint",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjshkdomef7fr0")

  // remove
  collection.schema.removeField("0flachvn")

  return dao.saveCollection(collection)
})
