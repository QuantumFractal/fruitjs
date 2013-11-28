var aT0 = {
	events: [ /* All events start out as false. */
		"wentLeft",
	],
	desc: "Hi. This is a game. You play as fruit.",
	c0: "Begin.",
	p0: {
		desc: "You are an apple.",
		c0: "Go left.",
		d0: [ /* Disqualifiers. If any of the following is TRUE, the command doesn't show. */
			"wentLeft == true",
		],
		p0: {
			set: [ /* Setters. These values are set if the corresponding path is reached. */
				"wentLeft = true",
			],
			desc: "You hear an awful grinding noise.",
			c0: "Plug drain.",
			p0: {
				desc: "How?",
				c0: "Jump in it.",
				p0: {
					desc: "Game over.",
					c0: "Restart.",
					p0: {
						reset: "0",
					}
				},
				c1: "Throw the plug in it.",
				p1: {
					c0: "",
					p0: {
						c0: "Go back.",
						p0: {
							reset: "0",
						}
					}
				}
			}
		},
		c1: "Go right.",
		p1: {
			c0: "Walk across stove.",
			p0: {
				c0: "Keep going.",
				p0: {
					desc: "Game over.",
					c0: "Restart.",
					p0: {
						reset: "0",
					}
				},
				c1: "Go back.",
				p1: {
					reset: "01"
				}
			},
			c1: "Stack shakers.",
			p1: {
				c0: "Get in microwave.",
				p0: {
					c0: "Shut door.",
					p0: {
						desc: "lol now what",
						p0: {
							desc: "Character select."
						}
					},
					c1: "Jump out.",
					p1: {
						reset: "01111"
					}
				},
				c1: "Give up.",
				p1: {
					c0: "Write a note.",
					p0: {
						p0: {
							reset: "0111"
						}
					},
					c1: "Jump.",
					p1: {
						// apple falling
						p0: {
							// apple hits orange
							desc: "Hey. It's Orange.",
							c0: "Be Orange.",
							p0: {
								tree: "oTB"
							}
						}
					}
				}
			}
		}
	}
}

var oTB = {
	events: [
		"daggerNotInInventory",
		"daggerOnFloorWhereAppleLanded",
		"appleInOrangeInventory"
	],
	desc: "He looks pretty unconscious.",
	c0: "Add Apple to inventory.",
	p0: {
		desc: "You only have one spot in your inventory. Will you swap your dagger for apple?",
		
	},
}