/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7t5fs7g0dsddsvb",
    "created": "2024-05-27 11:33:12.934Z",
    "updated": "2024-05-27 11:33:12.934Z",
    "name": "view_expense_types_full",
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
      "query": "SELECT id FROM tbl_expense_types AS et;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7t5fs7g0dsddsvb");

  return dao.deleteCollection(collection);
})
