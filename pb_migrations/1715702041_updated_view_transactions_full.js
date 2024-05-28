/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m")

  collection.options = {
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id;"
  }

  // remove
  collection.schema.removeField("z1ykhaoi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebsqc9du",
    "name": "amount",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7clodheu",
    "name": "note",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ut9nmdtc",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m")

  collection.options = {
    "query": "SELECT tr.id, tr.amount FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z1ykhaoi",
    "name": "amount",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("ebsqc9du")

  // remove
  collection.schema.removeField("7clodheu")

  // remove
  collection.schema.removeField("ut9nmdtc")

  return dao.saveCollection(collection)
})
