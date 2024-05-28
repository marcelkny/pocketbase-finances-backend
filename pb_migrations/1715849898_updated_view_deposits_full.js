/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjx2uq8ca8e02ex")

  collection.options = {
    "query": "SELECT d.id, d.name FROM tbl_deposits AS d INNER JOIN tbl_transactions AS tr ON tr.deposit_id = d.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwlbbbst",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("bjx2uq8ca8e02ex")

  collection.options = {
    "query": "SELECT d.id FROM tbl_deposits AS d INNER JOIN tbl_transactions AS tr ON tr.deposit_id = d.id;"
  }

  // remove
  collection.schema.removeField("cwlbbbst")

  return dao.saveCollection(collection)
})
