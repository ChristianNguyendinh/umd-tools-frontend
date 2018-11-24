# UMD Tools Frontend

Front end for visualizing various UMD APIs

## Related APIs

#### UMD CS Upper Level Registration Tracker

[Github link](https://github.com/ChristianNguyendinh/cs-upper-level-registration-stats)

Keeps track of how fast UMD Computer Science Upper Level courses fill up during registration period.

<hr />

#### UMD Course Search

[Github link](https://github.com/ChristianNguyendinh/cs-upper-level-registration-stats)

Allows searching UMD courses with additional building and class time filter parameters.

## Dev

`src/static/dist` needs 5 libraries:
- `bootstrap.min.css`
- `bootstrap.min.js`
- `d3.min.js`
- `jquery.autocomplete.min.js`
- `jquery.min.js`

## TODO:
- clean up route paths
- convert JS in HTML to TS
    - actually, then we would have to statically host...
        - actually we need that anyway for CS tracker
