var masteries = [
  {
    "name": "strength",
    "max": 9,
    "ranks": [
      {
        var1: 6,
        pi: 0.55
      },
      {
        var1: 9,
        pi: 0.20
      },
      {
        var1: 12,
        pi: 0.21
      },
      {
        var1: 15,
        pi: 0.20
      },
      {
        var1: 18,
        pi: 0.20
      },
      {
        var1: 21,
        pi: 0.20
      },
      {
        var1: 24,
        pi: 0.20
      },
      {
        var1: 27,
        pi: 0.20
      },
      {
        var1: 33,
        pi: 0.20
      }
    ],
    "type": 0,
    "xpos": 0,
    "ypos": 3,
    "style": "copper"
  },
  {
    "name": "greater-strength",
    "requirement": "strength",
    "max": 9,
    "ranks": [
      {
        var1: 1.6,
        pi: 0.56
      },
      {
        var1: 2,
        pi: 0.16
      },
      {
        var1: 2.4,
        pi: 0.13
      },
      {
        var1: 2.8,
        pi: 0.15
      },
      {
        var1: 3.6,
        pi: 0.29
      },
      {
        var1: 4.4,
        pi: 0.30
      },
      {
        var1: 5.2,
        pi: 0.29
      },
      {
        var1: 6.4,
        pi: 0.44
      },
      {
        var1: 8,
        pi: 0.57
      }
    ],
    "type": 0,
    "xpos": 2,
    "ypos": 3,
    "style": "copper"
  },
  {
    "name": "pierce",
    "requirement": "greater-strength",
    "max": 3,
    "ranks": [
      {
        var1: 5,
        pi: 0.39
      },
      {
        var1: 10,
        pi: 0.39
      },
      {
        var1: 15,
        pi: 0.39
      }
    ],
    "type": 0,
    "xpos": 4,
    "ypos": 2,
    "style": "bronze"
  },
  {
    "name": "courage",
    "requirement": "greater-strength",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        pi: 2.26
      },
      {
        var1: 20,
        pi: 0.00
      },
      {
        var1: 30,
        pi: 0.00
      }
    ],
    "type": 0,
    "xpos": 4,
    "ypos": 4,
    "style": "copper"
  },
  {
    "name": "lesser-precision",
    "requirement": "pierce",
    "max": 5,
    "ranks": [
      {
        var1: 0.5,
        pi: 0.15
      },
      {
        var1: 1,
        pi: 0.15
      },
      {
        var1: 1.5,
        pi: 0.15
      },
      {
        var1: 2,
        pi: 0.15
      },
      {
        var1: 2.5,
        pi: 0.15
      }
    ],
    "type": 0,
    "xpos": 6,
    "ypos": 1,
    "style": "copper"
  },
  {
    "name": "lesser-cruelty",
    "requirement": "pierce",
    "max": 5,
    "ranks": [
      {
        var1: 2,
        pi: 0.15
      },
      {
        var1: 4,
        pi: 0.15
      },
      {
        var1: 6,
        pi: 0.15
      },
      {
        var1: 8,
        pi: 0.15
      },
      {
        var1: 10,
        pi: 0.15
      }
    ],
    "type": 0,
    "xpos": 6,
    "ypos": 3,
    "style": "copper"
  },
  {
    "name": "extended-fury",
    "requirement": 4,
    "max": 4,
    "ranks": [
      {
        var1: 0.2,
        pi: 0.21
      },
      {
        var1: 0.4,
        pi: 0.21
      },
      {
        var1: 0.6,
        pi: 0.21
      },
      {
        var1: 0.8,
        pi: 0.21
      }
    ],
    "type": 0,
    "xpos": 6,
    "ypos": 6,
    "style": "copper"
  },
  {
    "name": "precision",
    "requirement": "lesser-precision",
    "max": 5,
    "ranks": [
      {
        var1: 2,
        pi: 0.50
      },
      {
        var1: 4,
        pi: 0.50
      },
      {
        var1: 6,
        pi: 0.50
      },
      {
        var1: 8,
        pi: 0.50
      },
      {
        var1: 10,
        pi: 0.49
      }
    ],
    "type": 0,
    "xpos": 8,
    "ypos": 1,
    "style": "bronze"
  },
  {
    "name": "cruelty",
    "requirement": "lesser-cruelty",
    "max": 5,
    "ranks": [
      {
        var1: 10,
        pi: 0.97
      },
      {
        var1: 20,
        pi: 0.96
      },
      {
        var1: 30,
        pi: 0.95
      },
      {
        var1: 40,
        pi: 0.94
      },
      {
        var1: 50,
        pi: 0.93
      }
    ],
    "type": 0,
    "xpos": 8,
    "ypos": 3,
    "style": "bronze"
  },
  {
    "name": "enhanced-fury",
    "requirement": "extended-fury",
    "max": 4,
    "ranks": [
      {
        var1: 2,
        pi: 0.21
      },
      {
        var1: 4,
        pi: 0.21
      },
      {
        var1: 6,
        pi: 0.21
      },
      {
        var1: 8,
        pi: 0.21
      }
    ],
    "type": 0,
    "xpos": 8,
    "ypos": 6,
    "style": "bronze"
  },
  {
    "name": "pure-skill",
    "requirement": 15,
    "max": 5,
    "ranks": [
      {
        var1: 4,
        pi: 0.00
      },
      {
        var1: 8,
        pi: 0.00
      },
      {
        var1: 16,
        pi: 0.00
      },
      {
        var1: 32,
        pi: 0.00
      },
      {
        var1: 64,
        pi: 0.00
      }
    ],
    "type": 0,
    "xpos": 10,
    "ypos": 2,
    "style": "bronze"
  },
  {
    "name": "mutagenesis",
    "requirement": 15,
    "max": 5,
    "ranks": [
      {
        var1: 0.5,
        pi: 0.00
      },
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 1.5,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 2.5,
        pi: 0.00
      }
    ],
    "type": 0,
    "xpos": 10,
    "ypos": 5,
    "style": "bronze"
  },
  {
    "name": "glass-cannon",
    "requirement": 15,
    "max": 3,
    "ranks": [
      {
        var1: 2.4,
        pi: 0.58
      },
      {
        var1: 4.8,
        pi: 0.50
      },
      {
        var1: 7.2,
        pi: 0.46
      }
    ],
    "type": 0,
    "xpos": 12,
    "ypos": 1,
    "style": "bronze"
  },
  {
    "name": "despair",
    "requirement": 15,
    "max": 3,
    "ranks": [
      {
        var1: 5,
        pi: 0.92
      },
      {
        var1: 10,
        pi: 0.45
      },
      {
        var1: 15,
        pi: 0.71
      }
    ],
    "type": 0,
    "xpos": 12,
    "ypos": 5,
    "style": "silver"
  },
  {
    "name": "recoil",
    "requirement": "glass-cannon",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        var2: 5,
        pi: 0.50
      },
      {
        var1: 15,
        var2: 7.5,
        pi: 0.51
      },
      {
        var1: 20,
        var2: 10,
        pi: 0.52
      }
    ],
    "type": 0,
    "xpos": 14,
    "ypos": 1,
    "style": "silver"
  },
  {
    "name": "deep-wounds",
    "requirement": "despair",
    "max": 5,
    "ranks": [
      {
        var1: 0.5,
        var2: 0.2,
        pi: 1.72
      },
      {
        var1: 1,
        var2: 0.4,
        pi: 0.18
      },
      {
        var1: 1.5,
        var2: 0.6,
        pi: 0.13
      },
      {
        var1: 2,
        var2: 0.8,
        pi: 0.13
      },
      {
        var1: 2.5,
        var2: 1,
        pi: 0.46
      }
    ],
    "type": 0,
    "xpos": 14,
    "ypos": 4,
    "style": "silver"
  },
  {
    "name": "unfazed",
    "requirement": "despair",
    "max": 5,
    "ranks": [
      {
        var1: 17,
        var2: 10,
        pi: 1.42
      },
      {
        var1: 22,
        var2: 15,
        pi: 0.42
      },
      {
        var1: 30,
        var2: 20,
        pi: 0.41
      },
      {
        var1: 40,
        var2: 25,
        pi: 0.42
      },
      {
        var1: 55,
        var2: 30,
        pi: 0.41
      }
    ],
    "type": 0,
    "xpos": 14,
    "ypos": 6,
    "style": "silver"
  },
  {
    "name": "liquid-courage",
    "requirement": "recoil",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        pi: 3.46
      },
      {
        var1: 20,
        pi: 3.65
      },
      {
        var1: 30,
        pi: 3.50
      }
    ],
    "type": 0,
    "xpos": 16,
    "ypos": 0,
    "style": "silver"
  },
  {
    "name": "double-edge",
    "requirement": "recoil",
    "max": 3,
    "ranks": [
      {
        var1: 8,
        var2: 10,
        var3: 10,
        pi: 0.51
      },
      {
        var1: 12,
        var2: 20,
        var3: 15,
        pi: 2.28
      },
      {
        var1: 16,
        var2: 30,
        var3: 20,
        pi: 0.51
      }
    ],
    "type": 0,
    "xpos": 16,
    "ypos": 2,
    "style": "silver"
  },
  {
    "name": "assassin",
    "requirement": "deep-wounds",
    "max": 5,
    "ranks": [
      {
        var1: 20,
        var2: 12,
        pi: 1.20
      },
      {
        var1: 30,
        var2: 14,
        pi: 0.50
      },
      {
        var1: 40,
        var2: 16,
        pi: 0.45
      },
      {
        var1: 50,
        var2: 18,
        pi: 0.45
      },
      {
        var1: 60,
        var2: 20,
        pi: 0.45
      }
    ],
    "type": 0,
    "xpos": 16,
    "ypos": 5,
    "style": "silver"
  },
  {
    "name": "vitality",
    "max": 9,
    "ranks": [
      {
        var1: 24,
        pi: 0.17
      },
      {
        var1: 36,
        pi: 0.17
      },
      {
        var1: 48,
        pi: 0.17
      },
      {
        var1: 60,
        pi: 0.17
      },
      {
        var1: 72,
        pi: 0.17
      },
      {
        var1: 84,
        pi: 0.17
      },
      {
        var1: 96,
        pi: 0.17
      },
      {
        var1: 120,
        pi: 0.17
      },
      {
        var1: 156,
        pi: 0.17
      }
    ],
    "type": 1,
    "xpos": 0,
    "ypos": 3,
    "style": "copper"
  },
  {
    "name": "greater-vitality",
    "requirement": "vitality",
    "max": 9,
    "ranks": [
      {
        var1: 1.6,
        pi: 0.65
      },
      {
        var1: 2,
        pi: 0.15
      },
      {
        var1: 2.4,
        pi: 0.14
      },
      {
        var1: 2.8,
        pi: 0.14
      },
      {
        var1: 3.6,
        pi: 0.28
      },
      {
        var1: 4.4,
        pi: 0.28
      },
      {
        var1: 5.2,
        pi: 0.27
      },
      {
        var1: 6.4,
        pi: 0.42
      },
      {
        var1: 8,
        pi: 0.55
      }
    ],
    "type": 1,
    "xpos": 2,
    "ypos": 3,
    "style": "copper"
  },
  {
    "name": "salve",
    "requirement": "greater-vitality",
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 1.10
      },
      {
        var1: 2,
        pi: 0.53
      },
      {
        var1: 4,
        pi: 1.06
      }
    ],
    "type": 1,
    "xpos": 4,
    "ypos": 1,
    "style": "bronze"
  },
  {
    "name": "block-proficiency",
    "requirement": "greater-vitality",
    "max": 4,
    "ranks": [
      {
        var1: 2,
        pi: 0.45
      },
      {
        var1: 4,
        pi: 0.42
      },
      {
        var1: 6,
        pi: 0.42
      },
      {
        var1: 8,
        pi: 0.42
      }
    ],
    "type": 1,
    "xpos": 4,
    "ypos": 5,
    "style": "copper"
  },
  {
    "name": "energy-resistance",
    "requirement": "greater-vitality",
    "max": 4,
    "ranks": [
      {
        var1: 1,
        pi: 0.14
      },
      {
        var1: 2,
        pi: 0.14
      },
      {
        var1: 3,
        pi: 0.14
      },
      {
        var1: 4,
        pi: 0.14
      }
    ],
    "type": 1,
    "xpos": 5,
    "ypos": 3,
    "style": "copper"
  },
  {
    "name": "recovery",
    "requirement": "salve",
    "max": 3,
    "ranks": [
      {
        var1: 5,
        pi: 0.22
      },
      {
        var1: 10,
        pi: 0.21
      },
      {
        var1: 15,
        pi: 0.21
      }
    ],
    "type": 1,
    "xpos": 6,
    "ypos": 1,
    "style": "bronze"
  },
  {
    "name": "perfect-block",
    "requirement": "block-proficiency",
    "max": 4,
    "ranks": [
      {
        var1: 1,
        pi: 0.45
      },
      {
        var1: 2,
        pi: 0.41
      },
      {
        var1: 3,
        pi: 0.42
      },
      {
        var1: 4,
        pi: 0.42
      }
    ],
    "type": 1,
    "xpos": 6,
    "ypos": 5,
    "style": "copper"
  },
  {
    "name": "physical-resistance",
    "requirement": "energy-resistance",
    "max": 4,
    "ranks": [
      {
        var1: 1,
        pi: 0.36
      },
      {
        var1: 2,
        pi: 0.35
      },
      {
        var1: 3,
        pi: 0.34
      },
      {
        var1: 4,
        pi: 0.34
      }
    ],
    "type": 1,
    "xpos": 7,
    "ypos": 3,
    "style": "copper"
  },
  {
    "name": "stand-your-ground",
    "requirement": "perfect-block",
    "max": 5,
    "ranks": [
      {
        var1: 17,
        pi: 0.22
      },
      {
        var1: 20,
        pi: 1.74
      },
      {
        var1: 25,
        pi: 0.00
      },
      {
        var1: 33,
        pi: 0.00
      },
      {
        var1: 50,
        pi: 0.00
      }
    ],
    "type": 1,
    "xpos": 8,
    "ypos": 5,
    "style": "bronze"
  },
  {
    "name": "collar-tech",
    "requirement": 15,
    "max": 5,
    "ranks": [
      {
        var1: 4,
        pi: 0.00
      },
      {
        var1: 6,
        pi: 0.00
      },
      {
        var1: 9,
        pi: 0.00
      },
      {
        var1: 13,
        pi: 0.00
      },
      {
        var1: 18,
        pi: 0.00
      }
    ],
    "type": 1,
    "xpos": 10,
    "ypos": 2,
    "style": "bronze"
  },
  {
    "name": "serum-science",
    "requirement": 15,
    "max": 5,
    "ranks": [
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 4,
        pi: 0.00
      },
      {
        var1: 8,
        pi: 0.00
      },
      {
        var1: 16,
        pi: 0.00
      },
      {
        var1: 32,
        pi: 0.00
      }
    ],
    "type": 1,
    "xpos": 10,
    "ypos": 5,
    "style": "bronze"
  },
  {
    "name": "willpower",
    "requirement": 15,
    "max": 3,
    "ranks": [
      {
        var1: 0.5,
        var2: 2,
        pi: 0.37
      },
      {
        var1: 0.6,
        var2: 3,
        pi: 0.34
      },
      {
        var1: 0.7,
        var2: 4,
        pi: 0.35
      }
    ],
    "type": 1,
    "xpos": 12,
    "ypos": 1,
    "style": "silver"
  },
  {
    "name": "coagulate",
    "requirement": "willpower",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        pi: 0.50
      },
      {
        var1: 20,
        pi: 0.50
      },
      {
        var1: 30,
        pi: 0.49
      }
    ],
    "type": 1,
    "xpos": 14,
    "ypos": 0,
    "style": "silver"
  },
  {
    "name": "inequity",
    "requirement": "willpower",
    "max": 3,
    "ranks": [
      {
        var1: 2,
        pi: 0.64
      },
      {
        var1: 4,
        pi: 0.65
      },
      {
        var1: 6,
        pi: 0.64
      }
    ],
    "type": 1,
    "xpos": 14,
    "ypos": 2,
    "style": "silver"
  },
  {
    "name": "suture",
    "requirement": "coagulate",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        pi: 0.99
      },
      {
        var1: 15,
        pi: 0.49
      },
      {
        var1: 20,
        pi: 0.50
      }
    ],
    "type": 1,
    "xpos": 16,
    "ypos": 0,
    "style": "silver"
  },
  {
    "name": "resonate",
    "requirement": "inequity",
    "max": 3,
    "ranks": [
      {
        var1: 7,
        pi: 0.62
      },
      {
        var1: 10,
        pi: 0.29
      },
      {
        var1: 13,
        pi: 0.29
      }
    ],
    "type": 1,
    "xpos": 16,
    "ypos": 2,
    "style": "silver"
  },
  {
    "name": "wisdom",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        pi: 0.00
      },
      {
        var1: 20,
        pi: 0.00
      },
      {
        var1: 30,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 0,
    "ypos": 1,
    "style": "copper"
  },
  {
    "name": "limber",
    "max": 5,
    "ranks": [
      {
        var1: 8,
        pi: 0.20
      },
      {
        var1: 16,
        pi: 0.20
      },
      {
        var1: 24,
        pi: 0.20
      },
      {
        var1: 32,
        pi: 0.20
      },
      {
        var1: 48,
        pi: 0.40
      }
    ],
    "type": 2,
    "xpos": 1,
    "ypos": 5,
    "style": "copper"
  },
  {
    "name": "intelligence",
    "requirement": "wisdom",
    "max": 5,
    "ranks": [
      {
        var1: 4,
        pi: 0.00
      },
      {
        var1: 8,
        pi: 0.00
      },
      {
        var1: 12,
        pi: 0.00
      },
      {
        var1: 16,
        pi: 0.00
      },
      {
        var1: 20,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 2,
    "ypos": 1,
    "style": "copper"
  },
  {
    "name": "parry",
    "requirement": "limber",
    "max": 3,
    "ranks": [
      {
        var1: 1.5,
        var2: 20,
        pi: 1.15
      },
      {
        var1: 1.7,
        var2: 25,
        pi: 0.35
      },
      {
        var1: 2,
        var2: 33,
        pi: 0.35
      }
    ],
    "type": 2,
    "xpos": 3,
    "ypos": 4,
    "style": "bronze"
  },
  {
    "name": "dexterity",
    "requirement": "limber",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        pi: 1.13
      },
      {
        var1: 25,
        pi: 0.19
      },
      {
        var1: 33,
        pi: 0.19
      }
    ],
    "type": 2,
    "xpos": 3,
    "ypos": 6,
    "style": "bronze"
  },
  {
    "name": "stupefy",
    "requirement": "parry",
    "max": 3,
    "ranks": [
      {
        var1: 0.1,
        pi: 0.77
      },
      {
        var1: 0.3,
        pi: 1.53
      },
      {
        var1: 0.5,
        pi: 1.50
      }
    ],
    "type": 2,
    "xpos": 5,
    "ypos": 3,
    "style": "bronze"
  },
  {
    "name": "petrify",
    "requirement": "parry",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        pi: 0.73
      },
      {
        var1: 20,
        pi: 0.72
      },
      {
        var1: 30,
        pi: 0.72
      }
    ],
    "type": 2,
    "xpos": 5,
    "ypos": 5,
    "style": "bronze"
  },
  {
    "name": "pittance",
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 6,
    "ypos": 1,
    "style": "bronze"
  },
  {
    "name": "pacify",
    "requirement": "petrify",
    "max": 3,
    "ranks": [
      {
        var1: 10,
        pi: 0.80
      },
      {
        var1: 20,
        pi: 0.79
      },
      {
        var1: 30,
        pi: 0.78
      }
    ],
    "type": 2,
    "xpos": 7,
    "ypos": 5,
    "style": "bronze"
  },
  {
    "name": "prosperity",
    "requirement": "pittance",
    "max": 3,
    "ranks": [
      {
        var1: 0.4,
        pi: 0.00
      },
      {
        var1: 1.2,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 8,
    "ypos": 1,
    "style": "bronze"
  },
  {
    "name": "cosmic-awareness",
    "requirement": 11,
    "max": 5,
    "ranks": [
      {
        var1: 2.5,
        pi: 0.00
      },
      {
        var1: 5,
        pi: 0.00
      },
      {
        var1: 10,
        pi: 0.00
      },
      {
        var1: 20,
        pi: 0.00
      },
      {
        var1: 40,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 10,
    "ypos": 2,
    "style": "bronze"
  },
  {
    "name": "mystic-dispersion",
    "requirement": 11,
    "max": 5,
    "ranks": [
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      },
      {
        var1: 5,
        pi: 0.00
      },
      {
        var1: 8,
        pi: 0.00
      },
      {
        var1: 12,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 10,
    "ypos": 5,
    "style": "bronze"
  },
  {
    "name": "detect-cosmic",
    "requirement": 11,
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 12,
    "ypos": 3,
    "style": "bronze"
  },
  {
    "name": "detect-tech",
    "requirement": 11,
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 13,
    "ypos": 1,
    "style": "bronze"
  },
  {
    "name": "detect-mystic",
    "requirement": 11,
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 13,
    "ypos": 5,
    "style": "bronze"
  },
  {
    "name": "scouter-lens",
    "requirement": 11,
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 14,
    "ypos": 3,
    "style": "silver"
  },
  {
    "name": "detect-mutant",
    "requirement": 11,
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 15,
    "ypos": 1,
    "style": "bronze"
  },
  {
    "name": "detect-science",
    "requirement": 11,
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 15,
    "ypos": 5,
    "style": "bronze"
  },
  {
    "name": "detect-skill",
    "requirement": 11,
    "max": 3,
    "ranks": [
      {
        var1: 1,
        pi: 0.00
      },
      {
        var1: 2,
        pi: 0.00
      },
      {
        var1: 3,
        pi: 0.00
      }
    ],
    "type": 2,
    "xpos": 16,
    "ypos": 3,
    "style": "bronze"
  }
];