
export default () => ({
   isLoading: true,
   entries: [
      {
         id: new Date().getTime(),
         date: new Date().toDateString(),
         text: 'Ullamco nisi nulla aliqua anim sint nostrud tempor aute.',
         picture: null,
      },
      {
         id: new Date().getTime() + 1000,
         date: new Date().toDateString(),
         text: 'Velit exercitation do fugiat occaecat veniam adipisicing eu sunt magna pariatur.',
         picture: null,
      },
      {
         id: new Date().getTime() + 2000,
         date: new Date().toDateString(),
         text: 'Irure commodo voluptate aliquip veniam anim sint enim tempor cupidatat duis ullamco eu.',
         picture: null,
      },
   ]
})
