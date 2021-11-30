const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;

const propertySchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    address: {
        addresses: {
            type: [
                String
            ]
        },
        showHouseNumber: {
            type: Boolean
        },
        showAptNumber: {
            type: Boolean
        },
        street: {
            type: String
        },
        borough: {
            type: Date
        },
        address: {
            type: String
        },
        unitNumber: {
            type: String
        },
        postalCode: {
            type: Schema.Types.Mixed
        },
        houseNumber: {
            type: Date
        },
        schoolZones: {
            type: [
                String
            ]
        }
    },
    adminStatus: {
        type: String
    },
    areas: {
        type: [
            String
        ]
    },
    bathroom: {
        hasBathtub: {
            type: String
        }
    },
    boundaries: {
        coordinates: {
            type: [
                Array
            ]
        },
        crs: {
            properties: {
                name: {
                    type: Date
                }
            },
            type: {
                type: String
            }
        },
        type: {
            type: String
        }
    },
    buildingAmenities: {
        parking: {
            valetYN: {
                type: Schema.Types.Mixed
            },
            kind: {
                type: Schema.Types.Mixed
            }
        },
        doorman: {
            type: String
        },
        concierge: {
            type: String
        },
        lobbyAttendant: {
            type: String
        },
        elevator: {
            type: String
        },
        greenBuilding: {
            type: String
        },
        piedATerreAllowed: {
            type: String
        },
        verizonFiOSEnabled: {
            type: String
        },
        laundryInBuilding: {
            type: String
        },
        smokeFree: {
            type: String
        },
        doormanType: {
            type: String
        },
        conciergeType: {
            type: String
        },
        lobbyAttendantType: {
            type: String
        },
        elevatorCount: {
            type: Schema.Types.Mixed
        },
        gymYN: {
            type: Boolean
        },
        saunaYN: {
            type: Schema.Types.Mixed
        },
        courtyardYN: {
            type: Boolean
        },
        spaYN: {
            type: Schema.Types.Mixed
        },
        yogaYN: {
            type: Schema.Types.Mixed
        },
        poolYN: {
            type: Boolean
        },
        gardenYN: {
            type: Boolean
        },
        terraceYN: {
            type: Boolean
        },
        healthClubYN: {
            type: Boolean
        },
        roofDeckYN: {
            type: Boolean
        },
        steamRoomYN: {
            type: Schema.Types.Mixed
        },
        intercomYN: {
            type: Schema.Types.Mixed
        },
        garageParkingYN: {
            type: Schema.Types.Mixed
        },
        patioYN: {
            type: Boolean
        },
        storageYN: {
            type: Boolean
        },
        ownerName: {
            type: String
        },
        isWheelchairAccessibleYN: {
            type: Boolean
        },
        yearIncorporated: {
            type: Schema.Types.Mixed
        },
        yearConverted: {
            type: Number
        },
        superYN: {
            type: Schema.Types.Mixed
        },
        superType: {
            type: Schema.Types.Mixed
        },
        hasSuperOnSiteYN: {
            type: Schema.Types.Mixed
        },
        isPreWwiiYN: {
            type: Boolean
        },
        isPreWwiYN: {
            type: Schema.Types.Mixed
        },
        isNewDevelopmentYN: {
            type: Schema.Types.Mixed
        },
        isRecentDevelopmentYN: {
            type: Schema.Types.Mixed
        },
        hasFireProtectionYN: {
            type: Schema.Types.Mixed
        },
        exteriorWallType: {
            type: String
        }
    },
    category: {
        type: String
    },
    closeDate: {
        type: Schema.Types.Mixed
    },
    closePrice: {
        type: Number
    },
    commissionData: {
        coBrokeKind: {
            type: String
        },
        amount: {
            type: Number
        },
        comments: {
            type: Schema.Types.Mixed
        },
        notesToBroker: {
            type: Schema.Types.Mixed
        },
        kind: {
            type: String
        },
        exclusive: {
            type: String
        },
        ownerPaysToCoBrokerYN: {
            type: Schema.Types.Mixed
        },
        concessionYN: {
            type: Schema.Types.Mixed
        },
        ownerPaysPlusConcessionsYN: {
            type: Schema.Types.Mixed
        },
        bonusYN: {
            type: Schema.Types.Mixed
        },
        ownerPaysRemarks: {
            type: Schema.Types.Mixed
        },
        concessionRemarks: {
            type: Schema.Types.Mixed
        },
        bonusRemarks: {
            type: Schema.Types.Mixed
        }
    },
    content: {
        type: String
    },
    coords: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    },
    createdAt: {
        $date: {
            type: Date
        }
    },
    deletedYN: {
        type: Boolean
    },
    entryDate: {
        $date: {
            type: Date
        }
    },
    expirationDate: {
        type: Schema.Types.Mixed
    },
    features: {
        masterBedroom: {
            type: String
        },
        decoratedFloor: {
            type: String
        },
        highCeiling: {
            type: String
        },
        propertyWithCharacter: {
            type: String
        },
        renovatedFloor: {
            type: String
        }
    },
    feedFilterDate: {
        $date: {
            type: Date
        }
    },
    floorOutOf: {
        type: Number
    },
    isRenovated: {
        type: String
    },
    kitchen: {
        kitchenEquipped: {
            type: String
        },
        isOpenKitchen: {
            type: String
        }
    },
    lastExistsCheck: {
        $date: {
            type: Date
        }
    },
    leaseData: {
        terms: {
            type: String
        },
        kind: {
            type: String
        },
        status: {
            type: String
        },
        statusChangeDate: {
            type: Schema.Types.Mixed
        },
        depositAmount: {
            type: Schema.Types.Mixed
        },
        minLeaseLength: {
            type: Number
        },
        maxLeaseLength: {
            type: Number
        }
    },
    link: {
        type: String
    },
    listingAmenities: {
        washerOrDrier: {
            washerOrDrierInUnit: {
                type: String
            },
            washerOrDrierInFloor: {
                type: String
            },
            allowed: {
                type: String
            }
        },
        furnishedData: {
            furnishedListPrice: {
                type: Schema.Types.Mixed
            },
            furnishedRemarks: {
                type: Schema.Types.Mixed
            },
            unfurnishedRemarks: {
                type: Schema.Types.Mixed
            },
            furnishedLeaseTermMonths: {
                type: Schema.Types.Mixed
            },
            furnishedMinLeaseMonths: {
                type: Schema.Types.Mixed
            },
            furnishedMaxLeaseMonths: {
                type: Schema.Types.Mixed
            },
            furnishedAvailableDate: {
                type: Schema.Types.Mixed
            }
        },
        boardApprovalRequired: {
            type: String
        },
        publicOutdoorSpace: {
            type: String
        },
        privateOutdoorSpace: {
            type: String
        },
        dishwasher: {
            type: String
        },
        furnished: {
            type: String
        },
        storageAvailable: {
            type: String
        },
        fireplace: {
            type: String
        },
        guarantorsAcceptedYN: {
            type: Boolean
        },
        stainlessSteel: {
            type: String
        }
    },
    location: {
        type: {
            type: String
        },
        coordinates: {
            type: [
                Number
            ]
        }
    },
    maintAmount: {
        type: Schema.Types.Mixed
    },
    maintIncludesCableYN: {
        type: Schema.Types.Mixed
    },
    maintIncludesElectricYN: {
        type: Schema.Types.Mixed
    },
    maintIncludesGasYN: {
        type: Schema.Types.Mixed
    },
    monthlyTaxAmount: {
        type: Schema.Types.Mixed
    },
    newDevelopmentYN: {
        type: Boolean
    },
    numOfBeds: {
        type: Number
    },
    old: {
        type: Boolean
    },
    originalPrice: {
        type: Number
    },
    parquetFloor: {
        type: String
    },
    photosObj: {
        type: Array
    },
    publishedAt: {
        $date: {
            type: Date
        }
    },
    removedDate: {
        type: Schema.Types.Mixed
    },
    removedReason: {
        type: String
    },
    removedYN: {
        type: Boolean
    },
    rentPrice: {
        type: Number
    },
    showDate: {
        $date: {
            type: Date
        }
    },
    showingData: {
        showingInstructions: {
            type: String
        },
        deliveredVacantYN: {
            type: Boolean
        }
    },
    sourceCreatedDate: {
        $date: {
            type: Date
        }
    },
    sourceId: {
        type: String
    },
    sourceModifiedDate: {
        $date: {
            type: Date
        }
    },
    subCategory: {
        type: String
    },
    totalMonthlyAmount: {
        type: Schema.Types.Mixed
    },
    unitsCount: {
        type: Number
    },
    yearBuilt: {
        type: Number
    },
    yearLastAltered: {
        type: Schema.Types.Mixed
    },
    photosCount: {
        type: Number
    },
    enhancedYN: {
        type: Boolean
    },
    enhancedDate: {
        $date: {
            type: Date
        }
    },
    enhancedKind: {
        type: String
    },
    ourRank: {
        type: Number
    },
    buildingPhotosObj: {
        type: Array
    },
    listingIds: {
        type: Array
    },
    favorite: {
        type: Boolean
    },
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property;