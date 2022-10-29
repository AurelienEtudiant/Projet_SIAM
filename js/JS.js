var map = [
    [-2,1,2,3,4,5,-2],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,11,12,13,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [-2,6,7,8,9,10,-2]
];

var reInit = false, inGame = false, tour = 0, ntour = 1, fini = false, bouge = false;

var init = function(reInit = false, inGame = false) {
    var cases = document.getElementsByClassName("case");
    for (var i = 0; i < cases.length; i++) {
        cases[i].classList.add("old");
    }
    var rotationRhino1, rotationRhino2, rotationRhino3, rotationRhino4, rotationRhino5, rotationElephant1, rotationElephant2, rotationElephant3, rotationElephant4, rotationElephant5;
    if (inGame) {
        rotationRhino1 = document.getElementById("1").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationRhino2 = document.getElementById("2").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationRhino3 = document.getElementById("3").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationRhino4 = document.getElementById("4").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationRhino5 = document.getElementById("5").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationElephant1 = document.getElementById("6").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationElephant2 = document.getElementById("7").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationElephant3 = document.getElementById("8").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationElephant4 = document.getElementById("9").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        rotationElephant5 = document.getElementById("10").style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        enEvidence = "";
    } else {
        rotationRhino1 = 180;
        rotationRhino2 = 180;
        rotationRhino3 = 180;
        rotationRhino4 = 180;
        rotationRhino5 = 180;
        rotationElephant1 = 0;
        rotationElephant2 = 0;
        rotationElephant3 = 0;
        rotationElephant4 = 0;
        rotationElephant5 = 0;
        enEvidence = " enEvidence";
    }
    if (reInit) {
        if (cases.length > 0) {
            if (confirm("Êtes-vous sûrs de vouloir réinitialiser le jeu ?")) {
                while (cases.length > 0) {
                    cases[0].remove();
                }
                map = [
                    [-2,1,2,3,4,5,-2],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,11,12,13,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [-2,6,7,8,9,10,-2]
                ];
            } else {
                return false;
            }
        }
        cancelSelect(true);
        tour = 0;
        ntour = 1;
        fini = false;
        bouge = false;
    }
    var top, left;
    var top0 = 55, top1 = 176, top2 = 297, top3 = 417.5, top4 = 538.5, top5 = 659.5, top6 = 780;
    var left0 = -92, left1 = 29, left2 = 150, left3 = 271, left4 = 392, left5 = 513, left6 = 634.5;
    var parentNode = document.getElementById("plateau");
    var n = 1;
    var n1 = 1;
    var n2 = 1;
    for (i = 0; i < 7; i++) { 
        if (i == 0) {top = top0;}
        else if (i == 1) {top = top1;}
        else if (i == 2) {top = top2;}
        else if (i == 3) {top = top3;}
        else if (i == 4) {top = top4;}
        else if (i == 5) {top = top5;}
        else if (i == 6) {top = top6;}
        for (var j = 0; j < 7; j++) {
            if (j == 0) {left = left0;}
            else if (j == 1) {left = left1;}
            else if (j == 2) {left = left2;}
            else if (j == 3) {left = left3;}
            else if (j == 4) {left = left4;}
            else if (j == 5) {left = left5;}
            else if (j == 6) {left = left6;}
            var newNode = document.createElement("div");
            switch (map[i][j]) {
                case -2:
                    newNode.setAttribute("id","coin" + n2);
                    newNode.setAttribute("class","case");
                    newNode.setAttribute("style","display: none; top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    n2++;
                    break;
                case -1:
                    newNode.setAttribute("id","case" + n1);
                    newNode.setAttribute("class","case sortie");
                    newNode.setAttribute("style","top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    n1++;
                    break;
                case 0:
                    newNode.setAttribute("id","case" + n);
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case");
                    newNode.setAttribute("style","top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    n++;
                    break;
                case 1:
                    newNode.setAttribute("id","1");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion rhino");
                    newNode.setAttribute("style","background-image: url(img/rhino1.png); transform: rotate(" + rotationRhino1 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 2:
                    newNode.setAttribute("id","2");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion rhino");
                    newNode.setAttribute("style","background-image: url(img/rhino2.png); transform: rotate(" + rotationRhino2 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 3:
                    newNode.setAttribute("id","3");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion rhino");
                    newNode.setAttribute("style","background-image: url(img/rhino3.png); transform: rotate(" + rotationRhino3 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 4:
                    newNode.setAttribute("id","4");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion rhino");
                    newNode.setAttribute("style","background-image: url(img/rhino4.png); transform: rotate(" + rotationRhino4 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 5:
                    newNode.setAttribute("id","5");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion rhino");
                    newNode.setAttribute("style","background-image: url(img/rhino5.png); transform: rotate(" + rotationRhino5 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 6:
                    newNode.setAttribute("id","6");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion elephant" + enEvidence);
                    newNode.setAttribute("style","background-image: url(img/elephant1.png); transform: rotate(" + rotationElephant1 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 7:
                    newNode.setAttribute("id","7");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion elephant" + enEvidence);
                    newNode.setAttribute("style","background-image: url(img/elephant2.png); transform: rotate(" + rotationElephant2 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 8:
                    newNode.setAttribute("id","8");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion elephant" + enEvidence);
                    newNode.setAttribute("style","background-image: url(img/elephant3.png); transform: rotate(" + rotationElephant3 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 9:
                    newNode.setAttribute("id","9");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion elephant" + enEvidence);
                    newNode.setAttribute("style","background-image: url(img/elephant4.png); transform: rotate(" + rotationElephant4 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i,j);
                    newNode.setAttribute("coords",i + "," + j); 
                    break;
                case 10:
                    newNode.setAttribute("id","10");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion elephant" + enEvidence);
                    newNode.setAttribute("style","background-image: url(img/elephant5.png); transform: rotate(" + rotationElephant5 + "deg); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 11:
                    newNode.setAttribute("id","11");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion rocher");
                    newNode.setAttribute("style","background-image: url(img/rocher1.png); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 12:
                    newNode.setAttribute("id","12");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion rocher");
                    newNode.setAttribute("style","background-image: url(img/rocher2.png); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                case 13:
                    newNode.setAttribute("id","13");
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case pion rocher");
                    newNode.setAttribute("style","background-image: url(img/rocher3.png); top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    break;
                default:
                    newNode.setAttribute("id","case" + n);
                    newNode.setAttribute("onclick","select(this)");
                    newNode.setAttribute("class","case");
                    newNode.setAttribute("style","background-color: white; top:"  + top + "px; left:" + left + "px;");
                    newNode.setAttribute("coords",i + "," + j);
                    n++;
                    break;
            }
            parentNode.append(newNode);
            cases = document.getElementsByClassName("old");
        }
    }
    while (cases.length > 0) {
        cases[0].remove();
    }
    cancelSelect();
};

var selection = null;

function cancelSelect(annule = false) {
    if (annule) {
        selection = null;
        document.getElementById("annuler").disabled = true;
        document.getElementById("tourneEtRetourne").disabled = true;
        document.getElementById("tourneEtRetourneUnPeuAGauche").disabled = true;
        document.getElementById("tourneEtRetourneUnPeuADroite").disabled = true;
        document.getElementById("passeTour").disabled = true;
    }
    var cases = document.getElementsByTagName("div");
    for (var i = 0; i < cases.length; i++) {
        if (cases[i].classList.contains("selection")) {
            cases[i].classList.remove("selection");
        }
        if (cases[i].classList.contains("cliquable")) {
            cases[i].classList.remove("cliquable");
        }
        if (cases[i].classList.contains("sortieCliquable")) {
            cases[i].classList.remove("sortieCliquable");
        }
    }
}

function mouvement(selection,position,valide = false) {
    var selectionX = parseInt(selection.getAttribute("coords").slice(0,1));
    var selectionY = parseInt(selection.getAttribute("coords").slice(2,3));
    var positionX = parseInt(position.getAttribute("coords").slice(0,1));
    var positionY = parseInt(position.getAttribute("coords").slice(2,3));
    var temp = map[positionX][positionY];
    map[positionX][positionY] = map[selectionX][selectionY];
    map[selectionX][selectionY] = temp;
    init(false,true);
    document.getElementById("tourneEtRetourne").disabled = false;
    document.getElementById("tourneEtRetourneUnPeuAGauche").disabled = false;
    document.getElementById("tourneEtRetourneUnPeuADroite").disabled = false;
    document.getElementById("annuler").disabled = true;
    document.getElementById(selection.id).classList.add("selection");
    if (!valide) {
        bouge = true;
    }
}

function pousse(selection,position) {
    var selectionX = parseInt(selection.getAttribute("coords").slice(0,1));
    var selectionY = parseInt(selection.getAttribute("coords").slice(2,3));
    var positionX = parseInt(position.getAttribute("coords").slice(0,1));
    var positionY = parseInt(position.getAttribute("coords").slice(2,3));
    var rotationSelection = parseInt(selection.style.getPropertyValue("transform").replace("rotate(","").replace("deg)",""));
    var direction = "";
    var n = 0;
    var x = 0;
    var y = 0;
    var pions = [];
    var force = 1;
    var autorise = false;
    var contraire = false;
    if (selectionX < positionX) {
        direction = "bas";
        x = selectionX + 1;
        while (map[x][selectionY] != 0 && estPlateau(x,selectionY)) {
            pions.push(x + "," + selectionY);
            if (estPlateau(x,selectionY)) {
                x++;
            } else {
                break;
            }
        }
    } else if (selectionX > positionX) {
        direction = "haut";
        x = selectionX - 1;
        while (map[x][selectionY] != 0 && estPlateau(x,selectionY)) {
            pions.push(x + "," + selectionY);
            if (estPlateau(x,selectionY)) {
                x--;
            } else {
                break;
            }
        }
    } else if (selectionY < positionY) {
        direction = "droite";
        y = selectionY + 1;
        while (map[selectionX][y] != 0 && estPlateau(selectionX,y)) {
            pions.push(selectionX + "," + y);
            if (estPlateau(selectionX,y)) {
                y++;
            } else {
                break;
            }
        }
    } else if (selectionY > positionY) {
        direction = "gauche";
        y = selectionY - 1;
        while (map[selectionX][y] != 0 && estPlateau(selectionX,y)) {
            pions.push(selectionX + "," + y);
            if (estPlateau(selectionX,y)) {
                y--;
            } else {
                break;
            }
        }
    }
    if (((direction == "haut") && (rotationSelection == 0)) || ((direction == "droite") && (rotationSelection == 90)) || ((direction == "bas") && (rotationSelection == 180)) || ((direction == "gauche") && (rotationSelection == 270))) {
        autorise = true;
    }
    if (pions.length == 1 && ((selection.classList.contains("elephant") && position.classList.contains("rhino")) || (selection.classList.contains("rhino") && position.classList.contains("elephant")) || (selection.classList.contains("rhino") && position.classList.contains("rhino")) || (selection.classList.contains("elephant") && position.classList.contains("elephant")))) {
        force--;
    }
    if (autorise) {
        var cases = document.getElementsByTagName("div");
        for (var i = 0; i < pions.length; i++) {
            n = 0;
            contraire = false;
            while (cases[n].getAttribute("coords") != pions[i].slice(0,3)) {
                n++;
            }
            var rotationPosition = parseInt(cases[n].style.getPropertyValue("transform").replace("rotate(","").replace("deg)",""));
            if ((estPlateau(positionX,positionY)) && ((rotationSelection == 0) && (rotationPosition == 180)) || ((rotationSelection == 90) && (rotationPosition == 270)) || ((rotationSelection == 180) && (rotationPosition == 0)) || ((rotationSelection == 270) && (rotationPosition == 90))) {
                contraire = true;
            }
            if ((estPlateau(positionX,positionY)) && ((rotationSelection == 0) && (rotationPosition == 0)) || ((rotationSelection == 90) && (rotationPosition == 90)) || ((rotationSelection == 180) && (rotationPosition == 180)) || ((rotationSelection == 270) && (rotationPosition == 270))) {
                force++;
            }
            if (cases[n].classList.contains("rocher") || contraire) {
                force--;
            }
        }
        if (force >= 0) {
            x = selectionX;
            y = selectionY;
            var tempA = map[x][y];
            var tempB;
            map[x][y] = 0;
            for (i = 0; i <= pions.length; i++) {
                var coords = x + "," + y;
                n = 0;
                while (cases[n].getAttribute("coords") != coords) {
                    n++;
                }
                if (direction == "bas") {
                    x++;
                } else if (direction == "haut") {
                    x--;
                } else if (direction == "droite") {
                    y++;
                } else if (direction == "gauche") {
                    y--;
                }
                tempB = map[x][y];
                map[x][y] = tempA;
                tempA = tempB;
                if (!estPlateau(x,y)) {
                    sortie(cases[n],direction,tempB);
                }
            }
            if (!fini) {
                init(false,true);
                passeTour();
            }
        }
    }
}

function tourneEtRetourne() {
    var rotation = parseInt(selection.style.getPropertyValue("transform").replace("rotate(","").replace("deg)",""));
    rotation += 180;
    if (rotation == 450) {
        rotation = 90;
    } else if (rotation == 360) {
        rotation = 0;
    }
    document.getElementById(selection.id).style.transform = "rotate(" + rotation + "deg)";
    passeTour();
}

function tourneEtRetourneUnPeuAGauche() {
    var rotation = parseInt(selection.style.getPropertyValue("transform").replace("rotate(","").replace("deg)",""));
    rotation -= 90;
    if (rotation == -90) {
        rotation = 270;
    }
    document.getElementById(selection.id).style.transform = "rotate(" + rotation + "deg)";
    passeTour();
}

function tourneEtRetourneUnPeuADroite() {
    var rotation = parseInt(selection.style.getPropertyValue("transform").replace("rotate(","").replace("deg)",""));
    rotation += 90;
    if (rotation == 360) {
        rotation = 0;
    }
    document.getElementById(selection.id).style.transform = "rotate(" + rotation + "deg)";
    passeTour();
}

function estPlateau(x,y) {
    if (x >= 1 && x <= 5 && y >= 1 && y <= 5) {
        return true;
    }
    return false;
}

function estCase(x,y) {
    if (x >= 0 && x <= 6 && y >= 0 && y <= 6) {
        if (map[x][y] == 0) {
            return true;
        }
    }
    return false;
}

function estSortie(x,y) {
    if (x == 0 || x == 6 || y == 0 || y == 6) {
        return true;
    }
    return false;
}

function estPion(x,y) {
    var pions = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    if (x >= 0 && x <= 6 && y >= 0 && y <= 6) {
        if (pions.includes(map[x][y])) {
            return true;
        }
    }
    return false;
}

function casesAutour(x,y) {
    var cases = document.getElementsByTagName("div");
    var coords = x + "," + y;
    var i = 0;
    while (cases[i].getAttribute("coords") != coords) {
        i++;
    }
    if (estPlateau(x,y)) {
        cases[i].classList.add("cliquable");
    } else {
        cases[i].classList.add("sortieCliquable");
    }
}

function rentrePion() {
    var casesEntree = ["1,1","1,2","1,4","1,5","2,1","2,5","3,1","3,5","4,1","4,5","5,1","5,2","5,4","5,5"];
    if (ntour > 4) {
        casesEntree.push("1,3","5,3");
    }
    var x = 0;
    var y = 0;
    var cases = document.getElementsByClassName("case");
    var coords;
    var n = 0;
    var i = 0;
    for (i; i < casesEntree.length; i++) {
        x = parseInt(casesEntree[i].slice(0,1));
        y = parseInt(casesEntree[i].slice(2,3));
        coords = x + "," + y;
        n = 0;
        while (cases[n].getAttribute("coords") != coords) {
            n++;
        }
        if (estPlateau(x,y) && estCase(x,y)) {
            cases[n].classList.add("cliquable");
        }
    }
}

function sortie(element,direction = undefined,pionSortie = undefined) {
    var posX = parseInt(element.getAttribute("coords").slice(0,1));
    var posY = parseInt(element.getAttribute("coords").slice(2,3));
    if (direction != undefined) {
        if (direction == "bas") {
            posX++;
        } else if (direction == "haut") {
            posX--;
        } else if (direction == "droite") {
            posY++;
        } else if (direction == "gauche") {
            posY--;
        }
    }
    var y = 1;
    if (element.classList.contains("rhino")) {
        while (map[0][y] != 0) {
            y++;
            if (y == 6) {
                break;
            }
        }
        if (y != 6) {
            map[0][y] = map[posX][posY];
            if (pionSortie == undefined) {
                map[posX][posY] = 0;
            } else {
                map[posX][posY] = pionSortie;
            }
            element.style.transform = "rotate(180deg)";
        }
    } else if (element.classList.contains("elephant")) {
        while (map[6][y] != 0) {
            y++;
            if (y == 6) {
                break;
            }
        }
        if (y != 6) {
            map[6][y] = map[posX][posY];
            if (pionSortie == undefined) {
                map[posX][posY] = 0;
            } else {
                map[posX][posY] = pionSortie;
            }
            element.style.transform = "rotate(0deg)";
        }
    }
    if (element.classList.contains("rocher")) {
        var plusProche = recherchePlusProche(posX,posY,direction);
        if (posX == 0) {
            while (map[0][y] != 0) {
                y++;
                if (y == 6) {
                    break;
                }
            }
            if (y != 6) {
                map[0][y] = pionSortie;
                map[posX][posY] = parseInt(element.id);
            }
        } else if (posX == 6) {
            while (map[6][y] != 0) {
                y++;
                if (y == 6) {
                    break;
                }
            }
            if (y != 6) {
                map[6][y] = pionSortie;
                map[posX][posY] = parseInt(element.id);
            }
        }
        if (plusProche != undefined) {
            fini = true;
            alert("Vainqueur : " + plusProche.classList[2]);
        }
    }
    init(false,true);
}

function recherchePlusProche(posX,posY,direction) {
    var pions = [];
    var i = 0;
    var cases = document.getElementsByClassName("case");
    var rotation = 0;
    var x = 0;
    var y = 0;
    if (direction == "bas") {
        posX--;
    } else if (direction == "haut") {
        posX++;
    } else if (direction == "droite") {
        posY--;
    } else if (direction == "gauche") {
        posY++;
    }
    if (direction == "bas") {
        while (map[posX][posY] != 0) {
            pions.push(posX + "," + posY);
            if (estPlateau(posX,posY)) {
                posX--;
            } else {
                break;
            }
        }
    } else if (direction == "haut") {
        while (map[posX][posY] != 0) {
            pions.push(posX + "," + posY);
            if (estPlateau(posX,posY)) {
                posX++;
            } else {
                break;
            }
        }
    } else if (direction == "droite") {
        while (map[posX][posY] != 0) {
            pions.push(posX + "," + posY);
            if (estPlateau(posX,posY)) {
                posY--;
            } else {
                break;
            }
        }
    } else if (direction == "gauche") {
        while (map[posX][posY] != 0) {
            pions.push(posX + "," + posY);
            if (estPlateau(posX,posY)) {
                posY++;
            } else {
                break;
            }
        }
    }
    for (i = 0; i < pions.length; i++) {
        x = parseInt(pions[i].slice(0,1));
        y = parseInt(pions[i].slice(2,3));
        if (direction == "bas") {
            x--;
        } else if (direction == "haut") {
            x++;
        } else if (direction == "droite") {
            y--;
        } else if (direction == "gauche") {
            y++;
        }
        coords = x + "," + y;
        n = 0;
        while (cases[n].getAttribute("coords") != coords) {
            n++;
        }
        rotation = cases[n].style.getPropertyValue("transform").replace("rotate(","").replace("deg)","");
        if ((rotation == 0 && direction == "haut") || (rotation == 90 && direction == "droite") || (rotation == 180 && direction == "bas") || (rotation == 270 && direction == "gauche")) {
            return cases[n];
        }
    }
}

function passeTour() {
    document.getElementById(selection.id).classList.add("deplace");
    cancelSelect(true);
    ntour++;
    bouge = false;
    document.getElementById("annuler").disabled = true;
    var rhino1 = document.getElementById("1");
    var rhino2 = document.getElementById("2");
    var rhino3 = document.getElementById("3");
    var rhino4 = document.getElementById("4");
    var rhino5 = document.getElementById("5");
    var elephant1 = document.getElementById("6");
    var elephant2 = document.getElementById("7");
    var elephant3 = document.getElementById("8");
    var elephant4 = document.getElementById("9");
    var elephant5 = document.getElementById("10");
    if (tour == 1) {
        tour = 0;
        rhino1.classList.remove("enEvidence");
        rhino2.classList.remove("enEvidence");
        rhino3.classList.remove("enEvidence");
        rhino4.classList.remove("enEvidence");
        rhino5.classList.remove("enEvidence");
        elephant1.classList.add("enEvidence");
        elephant2.classList.add("enEvidence");
        elephant3.classList.add("enEvidence");
        elephant4.classList.add("enEvidence");
        elephant5.classList.add("enEvidence");
    } else {
        tour = 1;
        elephant1.classList.remove("enEvidence");
        elephant2.classList.remove("enEvidence");
        elephant3.classList.remove("enEvidence");
        elephant4.classList.remove("enEvidence");
        elephant5.classList.remove("enEvidence");
        rhino1.classList.add("enEvidence");
        rhino2.classList.add("enEvidence");
        rhino3.classList.add("enEvidence");
        rhino4.classList.add("enEvidence");
        rhino5.classList.add("enEvidence");
    }
}

function select(element) {
    if (!fini) {
        var posX, posY;
        if (selection == null && element.classList.contains("pion") && ((element.classList.contains("rhino") && tour == 1) || (element.classList.contains("elephant") && tour == 0)) && !element.classList.contains("rocher")) {
            if (!bouge) {
                document.getElementById("annuler").disabled = false;
                element.classList.add("selection");
                selection = element;
                posX = parseInt(selection.getAttribute("coords").slice(0,1));
                posY = parseInt(selection.getAttribute("coords").slice(2,3));
                if (estSortie(posX,posY)) {
                    rentrePion();
                    if (!((posX == 6) && (posY == 3)) || ntour > 4) {
                        if (estCase(posX-1,posY) || estPion(posX-1,posY)) {
                            casesAutour(posX-1,posY);
                        }
                    }
                    if (!((posX == 0) && (posY == 3)) || ntour > 4) {
                        if (estCase(posX+1,posY) || estPion(posX+1,posY)) {
                            casesAutour(posX+1,posY);
                        }
                    }
                } else {
                    if (posX != 6 || ntour < 4) {
                        if (estCase(posX-1,posY) || estPion(posX-1,posY)) {
                            casesAutour(posX-1,posY);
                        }
                    }
                    if (posX != 0 || ntour > 4) {
                        if (estCase(posX+1,posY) || estPion(posX+1,posY)) {
                            casesAutour(posX+1,posY);
                        }
                    }
                }
                if (estCase(posX,posY-1) || estPion(posX,posY-1)) {
                    casesAutour(posX,posY-1);
                }
                if (estCase(posX,posY+1) || estPion(posX,posY+1)) {
                    casesAutour(posX,posY+1);
                }
            }

            if (!estSortie(posX,posY)) {
                document.getElementById("tourneEtRetourne").disabled = false;
                document.getElementById("tourneEtRetourneUnPeuAGauche").disabled = false;
                document.getElementById("tourneEtRetourneUnPeuADroite").disabled = false;
            }
            document.getElementById("passeTour").disabled = false;
        } else if (selection != null) {
            selectionX = parseInt(selection.getAttribute("coords").slice(0,1));
            selectionY = parseInt(selection.getAttribute("coords").slice(2,3));
            elementX = parseInt(element.getAttribute("coords").slice(0,1));
            elementY = parseInt(element.getAttribute("coords").slice(2,3));
            if (selection == element) {
                cancelSelect(true);
            } else {
                if (estPlateau(elementX,elementY)) {
                    if (element.classList.contains("pion") && (element.classList.contains("cliquable") || element.classList.contains("sortieCliquable"))) {
                        pousse(selection,element);
                    } else if (element.classList.contains("cliquable")) {
                        mouvement(selection,element,false);
                    }
                    if (!bouge && (selection != element) && (estCase(elementX,elementY))) {
                        cancelSelect(true);
                    }
                } else if ((estSortie(selectionX,selectionY) && estSortie(elementX,elementY)) && estCase(elementX,elementY) && element.classList.contains("sortieCliquable")) {
                    mouvement(selection,element,true);
                    cancelSelect(true);
                } else if ((estSortie(selectionX,selectionY) && estSortie(elementX,elementY)) && !bouge) {
                    cancelSelect(true);
                } else if (estSortie(elementX,elementY) && element.classList.contains("sortieCliquable")) {
                    sortie(selection,undefined,undefined);
                    passeTour();
                }
            }
        }
    }
}

window.onload = init(false,false);

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    if (!bouge) {
        cancelSelect(true);
        return false;
    }
}, false);