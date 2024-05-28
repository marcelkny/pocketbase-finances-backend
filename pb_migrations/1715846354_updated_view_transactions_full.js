/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m")

  collection.options = {
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date, et.id AS type_id, et.name AS type_name, ec.id AS category_id, ec.name AS category_name, tr.created, tr.user_id FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id INNEr JOIN tbl_expense_categories AS ec ON et.category_id = ec.id;"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pikpjj7p",
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
    "id": "efyguknj",
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
    "id": "tp0jblb2",
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
    "id": "06hz7rmn",
    "name": "type_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "712a4cxgnl8k6dg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c0sxivie",
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
    "id": "aql2xwm2",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q61nuvdc",
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
    "id": "endwfviv",
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
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date, et.name AS type_name, ec.name AS category_name, tr.created, tr.user_id FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id INNEr JOIN tbl_expense_categories AS ec ON et.category_id = ec.id;"
  }

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

  // remove
  collection.schema.removeField("pikpjj7p")

  // remove
  collection.schema.removeField("efyguknj")

  // remove
  collection.schema.removeField("tp0jblb2")

  // remove
  collection.schema.removeField("06hz7rmn")

  // remove
  collection.schema.removeField("c0sxivie")

  // remove
  collection.schema.removeField("aql2xwm2")

  // remove
  collection.schema.removeField("q61nuvdc")

  // remove
  collection.schema.removeField("endwfviv")

  return dao.saveCollection(collection)
})
