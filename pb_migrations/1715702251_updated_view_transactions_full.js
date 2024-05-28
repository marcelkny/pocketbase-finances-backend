/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m")

  collection.options = {
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date, et.name AS type_name, ec.name AS category_name FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id INNEr JOIN tbl_expense_categories AS ec ON et.category_id = ec.id;"
  }

  // remove
  collection.schema.removeField("b6zhrqj2")

  // remove
  collection.schema.removeField("b3nzrzpa")

  // remove
  collection.schema.removeField("5cw7b0zx")

  // remove
  collection.schema.removeField("ir4voler")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jvw5s21j",
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
    "id": "knp0b1mh",
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
    "id": "xq3qw7po",
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
    "id": "bjcjjkuk",
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
    "id": "oyehpbbr",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m")

  collection.options = {
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date, et.name FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id INNEr JOIN tbl_expense_categories AS ec ON et.category_id = ec.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b6zhrqj2",
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
    "id": "b3nzrzpa",
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
    "id": "5cw7b0zx",
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
    "id": "ir4voler",
    "name": "name",
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
  collection.schema.removeField("jvw5s21j")

  // remove
  collection.schema.removeField("knp0b1mh")

  // remove
  collection.schema.removeField("xq3qw7po")

  // remove
  collection.schema.removeField("bjcjjkuk")

  // remove
  collection.schema.removeField("oyehpbbr")

  return dao.saveCollection(collection)
})
