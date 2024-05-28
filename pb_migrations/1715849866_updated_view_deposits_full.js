/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjx2uq8ca8e02ex")

  collection.options = {
    "query": "SELECT d.id FROM tbl_deposits AS d INNER JOIN tbl_transactions AS tr ON tr.deposit_id = d.id;"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjx2uq8ca8e02ex")

  collection.options = {
    "query": "SELECT id FROM tbl_deposits;"
  }

  return dao.saveCollection(collection)
})
