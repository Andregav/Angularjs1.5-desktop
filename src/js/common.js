var dataApp = angular.module('dataApp', []);
dataApp.controller('dataCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('data/local.json').success(function(data) {
        $scope.Data = data;
        $scope.currentList = $scope.Data[0];
    });

    $scope.showList = function(album) {
        $scope.currentList = album;
    }

    $scope.addItem = function(album) {
        $scope.object = {};
        $scope.object.img_link = $scope.linkPicture;
        $scope.object.link = $scope.linkVideo;
        $scope.object.titleVideo = $scope.titleVideo;
        $scope.object.descriptionVideo = $scope.descriptionVideo;
        $scope.currentList.links.push($scope.object);
    }

}]);
addButton.onclick = () => popup.style.display = "block";
overlay.onclick = () => popup.style.display = "none";
popup__close.onclick = () => popup.style.display = "none";
save.addEventListener("click", function() {
    popup.style.display = "none";
    video.value = '';
    picture.value = '';
    title.value = '';
    description.value = '';
});