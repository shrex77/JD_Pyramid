var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function ($scope) {
    $scope.primaryBuisnessNeeds = [
        {
            label: 'Profit',
            description: '',
            blockid: 'Profit',
            status : [
          {  color: "Achiving" },
          {  color: "Acceptable" },
          {  color: "Failing" }
            ]
          
        },
    ];


    $scope.supportingBuisnessNeeds = [
        {
            'label': 'Volume', 'description': '', blockid: 'Volume',
            status: [
            { color: "Achiving" },
            { color: "Acceptable" },
            { color: "Failing" }
            ]
        },
         {
             'label': 'Revenue', 'description': '', blockid: 'Revenue',
             status: [
                { color: "Achiving" },
                { color: "Acceptable" },
                { color: "Failing" }
             ]
         },
          {
              'label': 'Margin', 'description': '', blockid: 'Margin',
              status: [
                   { color: "Achiving" },
                   { color: "Acceptable" },
                   { color: "Failing" }
              ]
          },
    ];



    $scope.uniqueBuisnessNeeds = [
      {
          'label': 'A', 'description': '', blockid: 'A',
          status: [
          { color: "Achiving" },
          { color: "Acceptable" },
          { color: "Failing" }
          ]
      },
       {
           'label': 'B', 'description': '', blockid: 'B',
           status: [
              { color: "Achiving" },
              { color: "Acceptable" },
              { color: "Failing" }
           ]
       },
        {
            'label': 'C', 'description': '', blockid: 'C',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'D', 'description': '', blockid: 'D',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'E', 'description': '', blockid: 'E',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'F', 'description': '', blockid: 'F',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'G', 'description': '', blockid: 'G',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'H', 'description': '', blockid: 'H',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'I', 'description': '', blockid: 'I',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'J', 'description': '', blockid: 'J',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'K', 'description': '', blockid: 'K',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
        {
            'label': 'L', 'description': '', blockid: 'L',
            status: [
                 { color: "Achiving" },
                 { color: "Acceptable" },
                 { color: "Failing" }
            ]
        },
    ];



        //$scope.status = [
        //  {  color: "Achiving" },
        //  {  color: "Acceptable" },
        //  {  color: "Failing" }
        //];


   
    $scope.ddnclick = function (id,selected,blockid,index) {
        debugger;
        var id = id + index;
      
        if (selected == "Achiving") {
            $("#" + id).removeClass("btn-warning");
            $("#" + id).removeClass("btn-danger");
            $("#" + id).addClass("btn-success");

            $("#" + blockid).removeClass("blockyellowcolor");
            $("#" + blockid).removeClass("blockredcolor");
            $("#" + blockid).removeClass("blocknocolor");
            $("#" + blockid).addClass("blockgreencolor");
        }

        else if (selected == "Acceptable") {
            $("#" + id).removeClass("btn-danger");
            $("#" + id).removeClass("btn-success");
            $("#" + id).addClass("btn-warning");

            $("#" + blockid).removeClass("blockredcolor");
            $("#" + blockid).removeClass("blockredcolor");
            $("#" + blockid).removeClass("blocknocolor");
            $("#" + blockid).addClass("blockyellowcolor");
        }

        else if (selected == "Failing") {
            $("#" + id).removeClass("btn-success");
            $("#" + id).removeClass("btn-warning");
            $("#" + id).addClass("btn-danger");


            $("#" + blockid).removeClass("blockyellowcolor");
            $("#" + blockid).removeClass("blockgreencolor");
            $("#" + blockid).removeClass("blocknocolor");
            $("#" + blockid).addClass("blockredcolor");
        }

        else {
            $("#" + id).addClass("btn-default");
            $("#" + blockid).removeClass("blocknocolor");
        }

       

    }
   

    $scope.personalNeedsMainContact = [
       {
           'label': 'personalNeeds1', 'description': '', blockid: 'personalNeeds1',
           status: [
           { color: "Achiving" },
           { color: "Acceptable" },
           { color: "Failing" }
           ]
       },
        {
            'label': 'personalNeeds2', 'description': '', blockid: 'personalNeeds2',
            status: [
               { color: "Achiving" },
               { color: "Acceptable" },
               { color: "Failing" }
            ]
        },
         {
             'label': 'personalNeeds3', 'description': '', blockid: 'personalNeeds3',
             status: [
                  { color: "Achiving" },
                  { color: "Acceptable" },
                  { color: "Failing" }
             ]
         },
         {
             'label': 'personalNeeds4', 'description': '', blockid: 'personalNeeds4',
             status: [
                  { color: "Achiving" },
                  { color: "Acceptable" },
                  { color: "Failing" }
             ]
         },
         {
             'label': 'personalNeeds5', 'description': '', blockid: 'personalNeeds5',
             status: [
                  { color: "Achiving" },
                  { color: "Acceptable" },
                  { color: "Failing" }
             ]
         },
    ];


}]);