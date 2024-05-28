/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "712a4cxgnl8k6dg",
    "created": "2024-05-14 05:50:28.422Z",
    "updated": "2024-05-14 05:50:28.422Z",
    "name": "tbl_expense_types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0bdkr04t",
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
      },
      {
        "system": false,
        "id": "k2hgunhm",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("712a4cxgnl8k6dg");

  return dao.deleteCollection(collection);
})
