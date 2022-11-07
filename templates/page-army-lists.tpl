<!DOCTYPE html>
<html lang="en">
<head>
    <title>Army Lists</title>

    <link rel="stylesheet" type="text/css" href="css/page-army-lists.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
          rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet">
</head>
<body class="page-background">
<div class="output-container" id="output-container">

    <page class="page page-preview page-army-lists" size="Letter" style="background-color:white">
        <div class="page-army-lists-inner">

            <h1>Army Lists</h1>
            {{#each armyLists}}

            <h2 class="heading">{{name}}</h2>

            <table class="army-list">
                <thead>
                <tr>
                    <th>Unit</th>
                    <th>Signature</th>
                    <th>Count</th>
                </tr>
                </thead>
                <tbody>

                {{#each list}}
                <tr>
                    <th>{{unit.name}}</th>
                    <td>{{unit.signature}}</td>
                    <td>{{count}}</td>
                </tr>
                {{/each}}
                <tr>
                    <th colspan="2">Total</th>

                    <td>{{modelCount}}</td>
                </tr>

                </tbody>
            </table>
            {{/each}}
        </div>
    </page>

</div>
</body>
</html>
