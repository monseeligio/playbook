const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   //console.log(explorers)
   console.log("ejercicio 2, punto 1")
   explorers.forEach(explorer=>console.log(explorer))

   console.log("ejercicio 2, punto 2")
   explorers.forEach(item=>console.log(item.stack))

   console.log("ejercicio 2, punto 2.3")
   const explorers_stacks = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
   console.log(explorers_stacks)

   console.log("ejercicio 2, punto 2.4")
   const explorer_with_js=explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
   console.log(explorer_with_js)

   console.log("ejercicio 2, punto 2.5")
   const first_explorer_in_CDMX=explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX")
   console.log(first_explorer_in_CDMX)

   console.log("ejercicio 2, punto 2.6")
   const all_exercises= explorers.reduce((acc,my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed,0)
   console.log(all_exercises)

   console.log("ejercicio 2, punto 2.7")
   const explorers_frontend_true= explorers.some((my_explorer_in_list) => my_explorer_in_list.missions.frontend.exercisesFinished === true)
   console.log(explorers_frontend_true)

   console.log("ejercicio 2, punto 2.8")
   const explorers_onboarding_true= explorers.every((my_explorer_in_list) => my_explorer_in_list.missions.onboarding.isFinished === true)
   console.log(explorers_onboarding_true)