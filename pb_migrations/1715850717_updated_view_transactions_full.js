/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m")

  collection.options = {
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date, d.id AS deposit_id, et.id AS type_id, et.name AS type_name, ec.id AS category_id, ec.name AS category_name, ec.is_cost AS is_cost, tr.created, tr.user_id FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id INNEr JOIN tbl_expense_categories AS ec ON et.category_id = ec.id INNER JOIN tbl_deposits AS d ON d.id = tr.deposit_id;"
  }

  // remove
  collection.schema.removeField("qvblwspz")

  // remove
  collection.schema.removeField("9sap8jlq")

  // remove
  collection.schema.removeField("l3pzgc5d")

  // remove
  collection.schema.removeField("zst2umyr")

  // remove
  collection.schema.removeField("ez7kn0uc")

  // remove
  collection.schema.removeField("k4yiequr")

  // remove
  collection.schema.removeField("nxpuiyai")

  // remove
  collection.schema.removeField("b0fzgulw")

  // remove
  collection.schema.removeField("pdc3j4oz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x7fjakdk",
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
    "id": "g5wweh7n",
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
    "id": "pmhiqpvn",
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
    "id": "j3ghg3hj",
    "name": "deposit_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rfyvjpbxjqd2cfp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1syjyij5",
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
    "id": "pkb7wcr9",
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
    "id": "w1v9lto2",
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
    "id": "acvysal9",
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
    "id": "ylr7hsr3",
    "name": "is_cost",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrdtnvzd",
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
    "query": "SELECT tr.id, tr.amount, tr.note, tr.date, d.id AS deposit_id, et.id AS type_id, et.name AS type_name, ec.id AS category_id, ec.name AS category_name, tr.created, tr.user_id FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id INNEr JOIN tbl_expense_categories AS ec ON et.category_id = ec.id INNER JOIN tbl_deposits AS d ON d.id = tr.deposit_id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qvblwspz",
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
    "id": "9sap8jlq",
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
    "id": "l3pzgc5d",
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
    "id": "zst2umyr",
    "name": "deposit_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rfyvjpbxjqd2cfp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ez7kn0uc",
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
    "id": "k4yiequr",
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
    "id": "nxpuiyai",
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
    "id": "b0fzgulw",
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
    "id": "pdc3j4oz",
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
  collection.schema.removeField("x7fjakdk")

  // remove
  collection.schema.removeField("g5wweh7n")

  // remove
  collection.schema.removeField("pmhiqpvn")

  // remove
  collection.schema.removeField("j3ghg3hj")

  // remove
  collection.schema.removeField("1syjyij5")

  // remove
  collection.schema.removeField("pkb7wcr9")

  // remove
  collection.schema.removeField("w1v9lto2")

  // remove
  collection.schema.removeField("acvysal9")

  // remove
  collection.schema.removeField("ylr7hsr3")

  // remove
  collection.schema.removeField("zrdtnvzd")

  return dao.saveCollection(collection)
})
