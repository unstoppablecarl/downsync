<!DOCTYPE html>
<html lang="en">
<head>
    <title>{{pageTitle}}</title>

    <link rel="stylesheet" type="text/css" href="css/page-cards-web.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
          rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet">
</head>
<body>
<div class="web-cards">

    {{#each cardData}}
    <h1>{{faction}}</h1>

    <div class="web-faction-cards">

        {{#each factionCards as |singleCardData|}}
        {{> (lookup singleCardData 'template') singleCardData}}
        {{/each}}
    </div>
    {{/each}}

</div>
</body>
</html>
