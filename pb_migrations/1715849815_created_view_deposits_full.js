/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bjx2uq8ca8e02ex",
    "created": "2024-05-16 08:56:55.641Z",
    "updated": "2024-05-16 08:56:55.641Z",
    "name": "view_deposits_full",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM tbl_deposits;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bjx2uq8ca8e02ex");

  return dao.deleteCollection(collection);
})
