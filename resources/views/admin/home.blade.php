<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Document</title>
  <script src="/js/uikit/uikit.js"></script>
  <link rel="stylesheet" href="/css/app.css">
</head>
<body>
  <div id="app">
    <navbar-component></navbar-component>
    <div class="wrapper-admin uk-flex" data-uk-grid>
        <aside class="uk-width-1-6@m uk-position-relative">
            <sidebar-component></sidebar-component>
        </aside>
        <aside class="uk-width-5-6@m">
          <div class="uk-container">
            <div class="uk-section">
              <router-view></router-view>
            </div>
          </div>
        </aside>
    </div>
  </div>
  <script src="/js/app.js"></script>
</body>
</html>