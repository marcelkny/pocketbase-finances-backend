/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvujw04v0vhkhtd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bt7egwio",
    "name": "token",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvujw04v0vhkhtd")

  // remove
  collection.schema.removeField("bt7egwio")

  return dao.saveCollection(collection)
})
