/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjshkdomef7fr0")

  // remove
  collection.schema.removeField("c8min94b")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yjshkdomef7fr0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c8min94b",
    "name": "category_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b9nx4qyra9zhomp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
