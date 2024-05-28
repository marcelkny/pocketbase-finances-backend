/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m")

  collection.options = {
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date, et.name AS type_name, ec.name AS category_name, tr.created, tr.user_id FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id INNEr JOIN tbl_expense_categories AS ec ON et.category_id = ec.id;"
  }

  // remove
  collection.schema.removeField("mfcoockp")

  // remove
  collection.schema.removeField("f6wqisud")

  // remove
  collection.schema.removeField("vhhkvtap")

  // remove
  collection.schema.removeField("xux8eu3u")

  // remove
  collection.schema.removeField("1sedafih")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwsky5oj",
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
    "id": "qhwl7muh",
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
    "id": "9rmogxes",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xeqisrdr",
    "name": "type_name",
    "type": "text",
    "required": true,
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
    "id": "55fwaebp",
    "name": "category_name",
    "type": "text",
    "required": true,
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
    "id": "y38a3ghq",
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
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m")

  collection.options = {
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date, et.name AS type_name, ec.name AS category_name, tr.created FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id INNEr JOIN tbl_expense_categories AS ec ON et.category_id = ec.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mfcoockp",
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
    "id": "f6wqisud",
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
    "id": "vhhkvtap",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xux8eu3u",
    "name": "type_name",
    "type": "text",
    "required": true,
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
    "id": "1sedafih",
    "name": "category_name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("wwsky5oj")

  // remove
  collection.schema.removeField("qhwl7muh")

  // remove
  collection.schema.removeField("9rmogxes")

  // remove
  collection.schema.removeField("xeqisrdr")

  // remove
  collection.schema.removeField("55fwaebp")

  // remove
  collection.schema.removeField("y38a3ghq")

  return dao.saveCollection(collection)
})
