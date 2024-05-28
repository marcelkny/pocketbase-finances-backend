/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b9nx4qyra9zhomp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zep81tga",
    "name": "is_cost",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b9nx4qyra9zhomp")

  // remove
  collection.schema.removeField("zep81tga")

  return dao.saveCollection(collection)
})
