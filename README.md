# Mercury / Mellow Muffins

Angular 22 shopping demo with a local in-memory API.

## Run

```sh
nvm use  # Node 26.10.0, pinned in .nvmrc
npm ci
npm start
```

Foreground localhost4200; Ctrl+C to stop. Nine products and example orders live in the in-memory API; reload restores fixtures. Cart Purchase retains its original demonstration behavior: clears cart/form and logs submitted details, without charging or persisting an order. This is distinct from Risa's online Stripe checkout.

Catalog/detail/cart/shipping/adminsearch/edit/add/delete/notifications remain. The previously broken add-product route now initializes an empty form; save uses create/update appropriately. Reactiveforms replace deprecated ngModel mixing. Original gallery screenshots were absent from both checkouts. The catalog's existing public muffin image is now bundled at assets/product.png and reused for those missing slots; no remote requests needed. Source: https://i.pinimg.com/originals/56/cf/33/56cf331bc11c0097b7ba5c10fbca8b62.png

## Validate

`npm run build`, `npm run typecheck`, `npm test -- --browsers=ChromeHeadless`, `npm audit`. Set CHROME_BIN if needed.

Angular22.2.0, MaterialCDK22.2.1, angular-in-memory-web-api0.22.0 (requires Angular^22), RxJS7.8.2/Zone0.16.3, Node26.10.0. TS6.0.3 held by Angular>=6<6.1; Jasmine6.3/types6 held due Jasmine7/zone-testing read-only global conflict. Current nativebuilder/moduleEagerZone/currentchips/localimports/Untypedforms. [Official Angular compatibility](https://angular.dev/reference/versions).

Cleaninstall/audit0/build/types and17Chromiumtests passed, including realin-memoryCRUD/search. ProductionPlaywrightdesktop1280x800/mobile390x844 passed catalog9/localimages/details/addtocart/shipping/purchasedemo/adminsearch/edit/add/delete/noerrors/overflow/externalrequests. Browserpluginabsent; existingPlaywright/Chromium148 used. Evidence/source snapshots outside repo in Codex/missionfolders. Other browsers/unexercisedexample-orderviews remain unverified.
