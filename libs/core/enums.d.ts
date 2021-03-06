

/*
To declare an image dropdown, make an enum,
then add icons into sim/public/blocks/namepace/enumvalue.png
declare const enum BasicShapes {
    //% blockIdentity=main._iconPicker blockImage=1
    Cube
}
*/

declare const enum SphereType {
    geodesic = 1,
    icosahedron = 1
}

declare const enum Axis {
    //% blockIdentity=main._axisPicker blockImage=1
    X =1,
    //% blockIdentity=main._axisPicker blockImage=1
    Y,
    //% blockIdentity=main._axisPicker blockImage=1
    Z
}

declare const enum RotateAxis {
    //% blockIdentity=main._rotateAxisPicker blockImage=1
    X =1,
    //% blockIdentity=main._rotateAxisPicker blockImage=1
    Y,
    //% blockIdentity=main._rotateAxisPicker blockImage=1
    Z
}


declare const enum StackDirection {
    Below =1,
    Above,
    InsideBelow,
    InsideAbove,
    CenterBelow,
    CenterAbove
}

declare const enum StyleEdgeDirection {
    Top =1,
    Bottom,
    Both
}

declare const enum EdgeStyle {
    //% blockIdentity=main._edgeStylePicker blockImage=1
    Chamfer =1 ,
    //% blockIdentity=main._edgeStylePicker blockImage=1
    ConcaveChamfer,
    //% blockIdentity=main._edgeStylePicker blockImage=1
    Fillet,
    //% blockIdentity=main._edgeStylePicker blockImage=1
    ConcaveFillet
}

declare const enum Polyhedra {
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Tetrahedron = 4 ,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Cube = 6,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Octahedron = 8,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    PentagonalTrapezohedron = 10,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Dodecahedron = 12,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Icosahedron = 20
}