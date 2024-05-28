/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t5fs7g0dsddsvb")

  collection.options = {
    "query": "SELECT et.id AS id, et.name As type_name, ec.id AS category_id, ec.name AS category_name\n  FROM tbl_expense_types AS et\n  INNER JOIN tbl_expense_categories AS ec ON et.category_id = ec.id;"
  }

  // remove
  collection.schema.removeField("86ye0dha")

  // remove
  collection.schema.removeField("7tbdqmwl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dqdyhnky",
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
    "id": "xsy0wrdn",
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
    "id": "o2fnr0fy",
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
  const collection = dao.findCollectionByNameOrId("7t5fs7g0dsddsvb")

  collection.options = {
    "query": "SELECT et.id AS id, et.name As name, ec.name AS cat_name\n  FROM tbl_expense_types AS et\n  INNER JOIN tbl_expense_categories AS ec ON et.category_id = ec.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "86ye0dha",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7tbdqmwl",
    "name": "cat_name",
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
  collection.schema.removeField("dqdyhnky")

  // remove
  collection.schema.removeField("xsy0wrdn")

  // remove
  collection.schema.removeField("o2fnr0fy")

  return dao.saveCollection(collection)
})
